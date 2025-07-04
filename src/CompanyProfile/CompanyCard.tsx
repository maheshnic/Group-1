import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";


export default function CompanyCard(props:any) {
  return (
    <div>
        <div className="flex justify-between items-center rounded-lg p-2">
                <div className="flex gap-2 items-center">
                  <div className="p-2 bg-blue-100 rounded-md">
                   <img className="h-7"src={`/Companies/${props.name}.png`}alt={`${props.name} logo`}onError={(e) => (e.currentTarget.src = '/Companies/default.png')}/>
                  </div>
                  <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-xs text-blue-800">
                      {props.employees} Employees
                    </div>
                  </div>
                </div>
                <ActionIcon variant="subtle" >
                    <IconExternalLink/>
                    </ActionIcon>
              </div>
    </div>
  )
}