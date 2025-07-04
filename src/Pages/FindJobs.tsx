import SearchBar from '../FindJobs/SearchBar'
import {Divider} from "@mantine/core";
import Jobs from '../FindJobs/Jobs';

export default function FindJobs() {
  return (
    <div className="min-h-[100vh] font-['poppins']">
 
        <SearchBar/>
        <Divider size="xs" mx="md"/>
        <Jobs/>
    </div>
  )
}