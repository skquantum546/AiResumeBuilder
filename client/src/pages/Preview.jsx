import React, { useState,useEffect } from 'react'
import ResumePreview from '../components/ResumePreview'
import api from '../configs/api'
import { useParams } from 'react-router-dom'
import { Loader } from 'lucide-react'
import { ArrowLeftIcon } from 'lucide-react'

const Preview = () => {
  const {resumeId}=useParams()
  const token = localStorage.getItem('token')

  const [isLoading,setIsLoading]=useState(true)
  const [resumeData,setResumeData]=useState(() => {
    try {
      const storedPreviewData = sessionStorage.getItem('resumePreviewData')
      return storedPreviewData ? JSON.parse(storedPreviewData) : null
    } catch {
      return null
    }
  })

  const loadResume=async()=>{
    const storedPreviewData = sessionStorage.getItem('resumePreviewData')

    if (storedPreviewData) {
      try {
        const parsedPreviewData = JSON.parse(storedPreviewData)
        setResumeData(parsedPreviewData)
        sessionStorage.removeItem('resumePreviewData')
        setIsLoading(false)
        return
      } catch {
        sessionStorage.removeItem('resumePreviewData')
      }
    }

    try{
      const {data}=await api.get('/api/resumes/public/'+resumeId)
      setResumeData(data.resume)
    }
    catch(error){
      if (token) {
        try {
          const {data}=await api.get('/api/resumes/get/'+resumeId, { headers: { Authorization: token } })
          setResumeData(data.resume)
        } catch (privateError) {
          console.log(privateError.message)
        }
      } else {
        console.log(error.message)
      }
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    loadResume()
  },[resumeId])

  return resumeData ? (
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
          <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} className='py-4 bg-white'/>
      </div>
    </div>
  ):(
    <div>
      {isLoading ? <Loader />:(
        <div className='flex flex-col items-center justify-center h-screen'>
          <p className='text-center text-6xl text-slate-400 font-medium'>Resume Not found</p>
          <a href="" className='mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-color'>
            <ArrowLeftIcon className='mr-2 size-4'/>
            Go to Home Page
          </a>
        </div>
      )}
    </div>
  )
}

export default Preview
