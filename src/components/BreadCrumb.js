import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'LegendPlex',
  description: 'LegenPlex app',
}

export default function BreadCrumb() {
    const [urlDefault, setUrlDefault] = useState();
    const [urlParse, setUrlParse] = useState();
    function replaceDashesWithSpaces(BreadCrumbUrl) {
        const regex = /[-/]/g;
        const result = BreadCrumbUrl.replace(regex, ' ');
        return result;
    }
    
    
    useEffect(() => {
        if (typeof document !== 'undefined') {
            const BreadCrumbUrl = window.location.pathname
            console.log(BreadCrumbUrl)
            const modifiedUrl = replaceDashesWithSpaces(BreadCrumbUrl);
            setUrlDefault(BreadCrumbUrl);
            setUrlParse(modifiedUrl);
        }
        
      }, [urlParse, urlDefault]);
  return (
    <>
    <main className='main' style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f3f3f3', padding: '16px 10px', zIndex: '99', position: 'relative'}}>
      <div className='container breadcrumb-wrapper'>
        <div className="row">
            <div className='col-md-12'>
                <Link href="">Homepage</Link> <span>&#62;</span>&nbsp;
                <Link href={`${urlDefault}`}>{urlParse}</Link>
                {urlDefault === "/" &&
                  <Link href={`${urlDefault}`}>Homepage</Link>
                }
            </div>
            
        </div>
      </div>
      
    </main>
    </>
  )
}
