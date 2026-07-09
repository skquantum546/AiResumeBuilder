import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import MinimalImageTemplate from './templates/MinimalImageTemplate'

const ResumePreview = ({data,template,accentColor,classes=""}) => {

    const renderTemplate=()=>{
        switch(template){
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor}/>;
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor}/>;
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor}/>;
            default:
                return <ClassicTemplate data={data} accentColor={accentColor}/>;
        }
    }
  return (
    <div className="w-full bg-gray-100">
        <div id="resume-preview" className={"border border-gray-200 print:shadow-none print:border-none"+classes}>
            <div>
                {renderTemplate()}
            </div>
        </div>

        <style>
            {`
                @page{
                    size:letter;
                    margin:0;
                }
                @media print{
                    html,body{
                        width:8.5in !important;
                        height:11in !important;
                        margin:0 !important;
                        padding:0 !important;
                        overflow:visible !important;
                        background: #fff !important;
                        color: #000 !important;
                    }
                    body * {
                        visibility:hidden !important;
                    }
                    #resume-preview,
                    #resume-preview * {
                        visibility:visible !important;
                    }
                    #resume-preview {
                        position:fixed !important;
                        left:0 !important;
                        top:0 !important;
                        width:100% !important;
                        height:auto !important;
                        margin:0 !important;
                        padding:0 !important;
                        box-shadow:none !important;
                        border:none !important;
                        background: #fff !important;
                    }
                    #resume-preview p,
                    #resume-preview span,
                    #resume-preview h1,
                    #resume-preview h2,
                    #resume-preview h3,
                    #resume-preview h4,
                    #resume-preview h5,
                    #resume-preview h6 {
                        color: #000 !important;
                    }
                }
            `}
        </style>
    </div>
  )
}

export default ResumePreview
