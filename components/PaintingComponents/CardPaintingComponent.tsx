"use client";


import {motion, MotionValue, useTransform} from "framer-motion";

interface Props{
    index:number;
    total:number;
    progress:MotionValue<number>;
}

export default function CardPaintingComponent({
    index,
    total,
    progress

}:Props){

    /*
        Cada card possui uma faixa
        própria de scroll.

        Exemplo:

        Card 0:
        0 - 0.14

        Card 1:
        0.14 - 0.28

        Card 2:
        0.28 - 0.42

    */


    const start = index / total;

    const end = (index+1) / total;



    const x = useTransform(

        progress,

        [
            start,
            end
        ],

        [
            "0%",
            "-120%"
        ]

    );



    const opacity = useTransform(

        progress,

        [
            start,
            end
        ],

        [
            1,
            0
        ]

    );



    const rotate = useTransform(

        progress,

        [
            start,
            end
        ],

        [
            0,
            -15
        ]

    );



    const scale = useTransform(

        progress,

        [
            0,
            1
        ],

        [
            1-index*0.02,
            1
        ]

    );



    return (


        <motion.div

            style={{

                x,
                opacity,
                rotate,
                scale,

                zIndex:
                    total-index

            }}


            className="
                absolute
                w-[350px]
                h-[450px]
                rounded-3xl
                bg-zinc-800
                border
                border-zinc-600
                shadow-2xl
                flex
                items-center
                justify-center
                text-white
                text-5xl
            "

        >

            {cardContent(index)}

        </motion.div>
    )
}

function cardContent(index:number){

    return (

        <span>

            BOX {index+1}

        </span>

    )

}