import { Button, CheckIcon, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconArrowLeft, IconCheck, IconPaperclip } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Notification, rem } from '@mantine/core';

export default function ApplyJobComp() {
    const [preview,setPreview]=useState(false);
    const [submit,setSubmit]=useState(false);
    const [sec,setSec]=useState(5);
    const navigate=useNavigate();
    const handlePreview=()=>{
        setPreview(!preview);
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const handleSubmit=()=>{
        setSubmit(true);
        let x=5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x==0)navigate('/find-jobs');
        },1000)
    }
  return (
 <> <div className='w-2/3 mx-auto'>
    <LoadingOverlay className='!fixed'
    visible={submit}
    zIndex={1000}
    overlayProps={{radius:'sm',blur:2}}
    loaderProps={{color:'pink',type:'bars'}}/>
        <div className="flex justify-between items-start">
                {/* Company Info */}
                <div className="flex gap-2 items-center">
                  <div className="p-3 bg-[#eef3ff] rounded-xl">
                    <img className="h-14" src={`/Companies/Google.png`} alt="" />
                  </div>
                  <div>
                    <div className="font-semibold text-2xl text-[#364379]">
                      Software Engineer III
                    </div>
                    <div className="text-lg text-[#44639f]">
                      Google &#x2022; 3 days ago &#x2022; 48 Applicants
                    </div>
                  </div>
                </div>
              </div>
                <Divider my="xl"/>
                <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-10 [&>*]:w-1/2'>
                    <TextInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview?"font-semibold":""}`} label="Full Name" withAsterisk placeholder="Enter name"/>
                    <TextInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview?"font-semibold":""}`}label="Email" withAsterisk placeholder="Enter email"/>
                    </div>
                    <div className='flex gap-10 [&>*]:w-1/2'>
                    <NumberInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview?"font-semibold":""}`} label="Contact Number" withAsterisk placeholder="Enter Contact Number" hideControls min={0} max={9999999999} clampBehavior='strict'/>
                    <TextInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview?"font-semibold":""}`} label="Personal Website" withAsterisk placeholder="Enter Url"/>
                    </div>
                    <FileInput readOnly={preview} variant={preview?'unstyled':'default'} className={`${preview?"font-semibold":""}`} withAsterisk leftSection={<IconPaperclip stroke={1.5}/>}
                    label="Attach your CV"
                    placeholder="Your CV"
                    leftSectionPointerEvents='none'/>
                    <Textarea withAsterisk placeholder="Tell something about yourself..."
                    label="Cover Letter"
                    autosize minRows={4}/>
                   {!preview &&<Button onClick={handlePreview} variant="light">Preview</Button>}
                   {
                    preview && <div className='flex gap-10 [&>*]:w-1/2'>
                        <Button fullWidth onClick={handlePreview} variant="outline">Edit</Button>
                        <Button fullWidth onClick={handleSubmit} variant="light">Submit</Button>
                    </div>
                   }
                </div>
    </div>
   {submit && (<Notification
  className={`translate-y-20 !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`}
  icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
  color="teal"
  withBorder
  title="Application Submitted!"
  mt="md"
  withCloseButton={false}
>
  Redirecting to Find Jobs in {sec} seconds...
</Notification>
  )}
    </>
  );
}




