import {useState, useEffect} from 'react';
import Link from "next/link";
const VID_Toolbar = () => {
return(
  <main>
      <div className={'spacer2'}/>
      <div className={'vidtb'}>
          <div style={{ color: '#3a3a3a', fontSize: '27px', fontWeight: 'bold' }}>Vibrant ID</div>

          <div style={{ display: 'flex'}}>
              <Link href={'/signin'}>
                  <div className={'buttonOpt'}>Sign In</div>
              </Link>

              <div className={'v_divider1'}/>

              <Link href={'/signup'}>
                  <div className={'buttonOpt'}>Create your Vibrant ID</div>
              </Link>
          </div>
      </div>
  </main>
);
}
export default VID_Toolbar;