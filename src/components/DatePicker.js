import React, {Component, useState} from 'react';
import ReactDOM from 'react-dom';
import CustomTextField from "@/components/CustomTextField";

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);
let inputRef = React.createRef();

export default class MyDatePicker extends Component {

    state = {
        getMonthDetails: [],
        selectedDate: null, // Step 1: Add a state variable for selected date
        selectedDateStr: '', // Step 1: Add a state variable for selected date string

    }

    constructor() {
        super();
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        this.state = {
            year,
            month,
            selectedDateStr: 'dd-mm-yyyy',
            selectedDay: todayTimestamp,
            monthDetails: this.getMonthDetails(year, month)
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.addBackDrop);
        this.setDateToInput(this.state.selectedDay);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.addBackDrop);
    }

    addBackDrop = e => {
        // eslint-disable-next-line react/no-find-dom-node
        if (this.state.showDatePicker && !ReactDOM.findDOMNode(this).contains(e.target)) {
            this.showDatePicker(false);
        }
    }

    showDatePicker = (showDatePicker = true) => {
        this.setState({showDatePicker})
    }

    onDateClick = day => {
        // Step 2: Update the selectedDay state when a date is clicked
        this.setState({selectedDay: day.timestamp}, () => {
            // Step 3: Update the selectedDateStr state with the formatted date string
            this.setDateToInput(day.timestamp);
            const formattedDate = this.getDateStringFromTimestamp(day.timestamp);
            this.setState({selectedDateStr: formattedDate});

            if (this.props.setDate) {
                this.props.setDate(day.timestamp);
            }
        });
    }

    daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    getDayDetails = args => {
        let date = args.index - args.firstDay;
        let day = args.index % 7;
        let prevMonth = args.month - 1;
        let prevYear = args.year;
        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let prevMonthNumberOfDays = this.getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let timestamp = new Date(args.year, args.month, _date).getTime();
        return {
            date: _date,
            day,
            month,
            timestamp,
            dayString: this.daysMap[day]
        }
    }

    getNumberOfDays = (year, month) => {
        return 40 - new Date(year, month, 40).getDate();
    }

    getMonthDetails = (year, month) => {
        let firstDay = (new Date(year, month)).getDay();
        let numberOfDays = this.getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 6;
        let currentDay = null;
        let index = 0;
        let cols = 7;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                currentDay = this.getDayDetails({
                    index,
                    numberOfDays,
                    firstDay,
                    year,
                    month
                });
                monthArray.push(currentDay);
                index++;
            }
        }
        return monthArray;
    }

    isCurrentDay = day => {
        return day.timestamp === todayTimestamp;
    }

    isSelectedDay = day => {
        return day.timestamp === this.state.selectedDay;
    }

    getDateFromDateString = dateValue => {
        let dateData = dateValue.split('-').map(d => parseInt(d, 10));
        if (dateData.length < 3)
            return null;

        let year = dateData[0];
        let month = dateData[1];
        let date = dateData[2];
        return {year, month, date};
    }

    getMonthStr = month => this.monthMap[Math.max(Math.min(11, month), 0)] || 'Month';

    getDateStringFromTimestamp = timestamp => {
        let dateObject = new Date(timestamp);
        let month = dateObject.getMonth() + 1;
        let date = dateObject.getDate();
        return (date < 10 ? '0' + date : date)  + '-' + (month < 10 ? '0' + month : month) + '-' + dateObject.getFullYear();
    }

    setDate = dateData => {
        let selectedDay = new Date(dateData.year, dateData.month - 1, dateData.date).getTime();
        this.setState({selectedDay})

        const formattedDate = this.getDateStringFromTimestamp(selectedDay);
        this.setState({selectedDateStr: formattedDate});

        if (this.props.onChange) {
            this.props.onChange(selectedDay);
        }
    }

    updateDateFromInput = () => {
        let dateValue = inputRef.current.value;
        let dateData = this.getDateFromDateString(dateValue);
        if (dateData !== null) {
            this.setDate(dateData);
            this.setState({
                year: dateData.year,
                month: dateData.month - 1,
                monthDetails: this.getMonthDetails(dateData.year, dateData.month - 1)
            })
        }
    }

    setDateToInput = (timestamp) => {
        let dateString = this.getDateStringFromTimestamp(timestamp);
        inputRef.current.value = dateString;
    }

    setYear = offset => {
        let year = this.state.year + offset;
        let month = this.state.month;
        this.setState({
            year,
            monthDetails: this.getMonthDetails(year, month)
        })
    }

    setMonth = offset => {
        let year = this.state.year;
        let month = this.state.month + offset;
        if (month === -1) {
            month = 11;
            year--;
        } else if (month === 12) {
            month = 0;
            year++;
        }
        this.setState({
            year,
            month,
            monthDetails: this.getMonthDetails(year, month)
        })
    }

    /**
     *  Renderers
     */

    renderCalendar() {
        let days = this.state.monthDetails.map((day, index) => {
            return (
                <div className={'c-day-container ' + (day.month !== 0 ? ' disabled' : '') +
                    (this.isCurrentDay(day) ? ' highlight' : '') + (this.isSelectedDay(day) ? ' highlight-green' : '')}
                     key={index}>
                    <div className='cdc-day'>
                        <span onClick={() => this.onDateClick(day)}>
                            {day.date}
                        </span>
                    </div>
                </div>
            )
        })

        return (
            <div className='c-container'>
                <div className='cc-head'>
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d, i) => <div key={i}
                                                                                          className='cch-name'>{d}</div>)}
                </div>
                <div className='cc-body'>
                    {days}
                </div>
            </div>
        )
    }

    render() {
        const dialogState = false;

        const handleDialogState = () => {
            this.showDatePicker(true);
        }

        return (
            <div className={`MyDatePicker ${dialogState ? 'show-datepicker' : ''}`}>

                <input type='date' onChange={this.updateDateFromInput} ref={inputRef} style={{
                    position: 'absolute',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: -1,
                }}/>

                <CustomTextField
                    label={this.props.setLabel}
                    value={this.state.selectedDateStr}
                    setDialogState={handleDialogState}
                    dialogState={dialogState}
                    adornmentIcon={7}/>

                {this.state.showDatePicker ? (
                    <div className='mdp-container z-50'>
                        <div className='mdpc-head'>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner' onClick={() => this.setYear(-1)}>
                                    <span className='mdpchbi-left-arrows'></span>
                                </div>
                            </div>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner' onClick={() => this.setMonth(-1)}>
                                    <span className='mdpchbi-left-arrow'></span>
                                </div>
                            </div>
                            <div className='mdpch-container'>
                                <div className='mdpchc-year'>{this.state.year}</div>
                                <div className='mdpchc-month'>{this.getMonthStr(this.state.month)}</div>
                            </div>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner' onClick={() => this.setMonth(1)}>
                                    <span className='mdpchbi-right-arrow'></span>
                                </div>
                            </div>
                            <div className='mdpch-button' onClick={() => this.setYear(1)}>
                                <div className='mdpchb-inner'>
                                    <span className='mdpchbi-right-arrows'></span>
                                </div>
                            </div>
                        </div>
                        <div className='mdpc-body'>
                            {this.renderCalendar()}
                        </div>
                    </div>
                ) : ''}
            </div>
        )
    }
}