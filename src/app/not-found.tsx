'use client';

import Image from 'next/image';
import LinkCard from "@/components/LinkCard";
import {GraduationCap, Podcast, Smile} from "lucide-react";
import {Button} from "@nextui-org/react";
import {TbArrowGuide} from "react-icons/tb";
import {IoIosArrowRoundBack} from "react-icons/io";
import {useRouter} from "next/navigation";

export default function NotFound() {

    const router = useRouter();

    function routeToHomePage() {
        router.push('/')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center my-10">

            <Image src={'/images/logo.png'} alt={'Logo'} height={120} width={120} className="mb-8"/>

            <div className={'h-8'}/>

            <h1 className="text-2xl font-medium text-blue-500">404</h1>
            <p className="text-[34px] font-bold text-black mb-4 mt-8">This page does not exist</p>
            <p className="text-lg text-gray-600">
                Sorry, we couldn’t find the page you’re looking for.
            </p>

            <div className={'h-[60px]'}/>

            <LinkCard
                title={'Community'}
                description={'Join our vibrant community to share ideas, ask questions, and connect with like-minded individuals.'}
                icon={<Smile strokeWidth={1.5}/>}
                href={'community'}
            />
            <LinkCard
                title={'Guides'}
                description={'Explore our comprehensive guides that cover a wide range of topics to help you get started.'}
                icon={<TbArrowGuide/>}
                href={'guides'}
            />
            <LinkCard
                title={'Learn'}
                description={'Discover new skills and concepts through our educational resources designed for all levels.'}
                icon={<GraduationCap strokeWidth={1.5}/>}
                href={'learn'}
            />
            <LinkCard
                title={'Podcast'}
                description={'Tune in to our podcast for insightful discussions on industry trends and expert interviews.'}
                icon={<Podcast strokeWidth={1.5}/>}
                divider={false}
                href={'podcast'}
            />

            <div className={'h-[20px]'}/>

            <Button color="primary" variant="light" startContent={<IoIosArrowRoundBack size={'24'}/>} onClick={routeToHomePage}>
                Back to home
            </Button>
        </div>
    );
}