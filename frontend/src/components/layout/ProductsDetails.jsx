import React from 'react'

const ProductsDetails = ({data}) => {
  console.log("data=====>", data)
  return (
    <>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="items-center gap-2">
            <h2 className="text-2xl font-semibold font-Kanit text-gray-900">Details</h2>
            <div className="mt-2 flex items-center gap-2 sm:mt-0">
              <div className='flex flex-col'>
                  <p className='py-2 font-Kanit font-light text-lg text-slate-900'>{data?.description}</p>

                  <p className='font-Kanit text-lg py-2'><span className='font-light'>Brand :- </span> {data?.brand}</p>

                  <p className='font-Kanit text-lg py-2'><span className='font-light'>Category :- </span> {data?.category}</p>

                <div>
                  
                  <ul className="list-disc py-2 pl-5 space-y-2">
                    {data?.product_details?.map((detail, index) => {
                      const [key, value] = Object.entries(detail)[0];
                      return (
                        <ul key={index} className="text-gray-700 font-Kanit">
                          <span className=" font-light">- {key}: </span>{value}
                        </ul>
                      );
                    })}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ProductsDetails
