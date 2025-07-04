import { Divider } from "@mantine/core";
import JobHistory from "../JobHistory/JobHistory";

    export default function JobHistoryPage() {
      return (
        <div className="min-h-[90vh]mfont-['poppins'] px-4">
            <Divider size="xs"/>
            <div className="my-5">
              <JobHistory/>
            </div>
        </div>
      )
    }