import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCard from "./DetailCard";

const Details = () => {

    const [ detail , setDetail] = useState();

    const { id } = useParams();

    const data = useLoaderData();


    useEffect( () => {

        const findDetail = data?.find(detail => detail.id == id)

        setDetail(findDetail);

    }, [ id , data])

    return (
        <div className="my-12 lg:my-28 container mx-auto">
            <DetailCard detail={detail}></DetailCard>
        </div>
    );
};

export default Details;