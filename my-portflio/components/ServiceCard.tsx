import { IService } from "@/type";
import { FunctionComponent } from "react";

const ServiceCard:FunctionComponent<{
    service: IService
}> = ({service:{Icon, title, about}}) => {
    return ( 
        <div className="flex items-center p-2 space-x-4">
            <Icon className="w-12 h-12 text-green-500" />
            <div>
                <h4 className="my-2 font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={{__html:about}}></p>
            </div>            
        </div> 
    );
}
 
export default ServiceCard;