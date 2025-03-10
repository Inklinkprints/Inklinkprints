import './approach.css'


export default function OurApproach(){
    return(
        <div className='ourApproach-box'>
            <h1>Our Approach</h1>
            <p className='ourApproach-desc1'>We manage the project by planning, organizing, and ensuring timely completion</p>
            <p className='ourApproach-desc2'>Our approach is entirely customer-focused, with a commitment to delivering excellence in every project. Leveraging the latest technology, we meet our clients' unique requirements from start to finish, ensuring satisfaction at every step.</p>
            <div className='ourApproach-container'>
            <div className='ourApproach-subcontainer1'>
            <div className="ourApproach-timeline">TIME LINE</div>
            <div className='circle-border'>
            <div className="circle circle-1"><p className='circle-desc'>Your requirement</p></div>
            </div>
      
            <div className='circle-border'>
            <div className="circle circle-2"><p className='circle-desc'>Conceptualization</p></div>
            </div>

            <div className='circle-border'>
            <div className="circle circle-3"><p className='circle-desc'>Proposal</p></div>
            </div>

            <div className='circle-border'>
            <div className="circle circle-4"><p className='circle-desc'>Approval</p></div>
            </div>

            <div className='circle-border'>
            <div className="circle circle-5"><p className='circle-desc'>Production</p></div>
            </div>
            <div className='circle-border'>
            <div className="circle circle-6"><p className='circle-desc'>Quality Check</p></div>
            </div>
            </div>
            
            
            <div className='ourApproach-subcontainer2'>
            <div className='circle-border'>
            <div className="circle circle-7"><p className='circle-desc'>Delivery & Installation</p></div>
            </div>
            <div className='circle-border'>
            <div className="circle circle-8"><p className='circle-desc'>Post Sale Service</p></div>
            </div>
            </div>
            </div>
 
           
        </div>
    )
}