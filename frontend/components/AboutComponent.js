import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function AboutComponent() {
  return (
    <div>
          <div className="mx-3 py-4 md:w-2/3 md:mx-auto">

        <h1 className="text-center text-[#000080] font-bold text-2xl border-b-4 mt-3 border-[#000080] w-1/2 mx-auto md:w-52">Who are we?</h1>
        <p className="text-center py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga inventore reiciendis porro unde praesentium sit quisquam, ullam, numquam amet voluptatem exercitationem, asperiores minus odit! Fugiat eum architecto quos itaque nihil assumenda atque, amet consequuntur vel voluptas quaerat consequatur! Asperiores, debitis?</p>
          </div>
          <div>
          <div className="mx-3 py-4 md:w-2/3 md:mx-auto">

        <h1 className="text-center text-[#000080] font-bold text-2xl border-b-4 mt-3 border-[#000080] w-1/2 mx-auto md:w-64 md:py-3">Founder's Message</h1>
        <div className="w-5/6 mx-auto py-4">
        <p >
        <FormatQuoteIcon className="text-gray-500"/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laborum ducimus ea, minima quas officia esse odit consectetur tempore tenetur error eaque blanditiis possimus expedita deleniti! Inventore esse, error dolor corrupti dignissimos laborum molestias dolore quas eum fugit molestiae. Eligendi repellat sapiente accusamus vero placeat non commodi fuga, doloremque et asperiores beatae fugiat libero iure unde quis fugit numquam velit impedit doloribus.beatae mollitia. Te s praesentium a. Error, dolorum nostrum aliquid maiores ratione nulla laboriosam voluptatibus. Nihil magnam laborum in nulla odio eligendi, quaerat molestiae repellendus sint expedita facere rem illo. Aperiam, pariatur qui nesciunt laborum omnis officiis, debitis ratione magni reprehenderit ipsum nemo, nobis cupiditate.
        <FormatQuoteIcon className="text-gray-500"/>
        </p>
        <div className="flex flex-col">

        <span className="text-lg font-bold text-center ">abc-xyz</span>
        <span className="text-center text-base font-semibold">Founder</span>
        </div>
        </div>
          </div>
      </div>
    </div>
  )
}