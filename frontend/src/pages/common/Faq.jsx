import React, { useState } from 'react'

const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const accordionData = [
        {
            id: 1,
            title: 'ARE YOU NEW TO ONLINE SHOPPING?',
            content: (
                <>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Navigate H&M Online by clicking on the categories on the top and left hand side of the screen. If you are looking for something specific you can type in a key word into the field with a magnifying glass.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        As you browse through our ever-changing selection, click on an item to be redirected to the individual product page. Here you can find information about available sizes, colours, and specific product details. Have you fallen in love with an item? Select a size and add it to your virtual shopping bag.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Access your shopping bag at any time by clicking the icon in the upper right hand corner of the page. In the shopping bag, you are able to change your order selection, add discounts, check the approximated delivery fee, and find out the total order value.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Are you feeling uncertain about making a purchase and want to wait till tomorrow? No problem! All of the items you found today will be saved in your shopping bag for 7 days. However, these items are not reserved, so there is a risk that we might sell out in your size. Why not order now and see how the items look styled at home.
                    </p>
                </>
            ),
        },
        {
            id: 2,
            title: 'ARE YOU READY TO CHECKOUT?',
            content: (
                <>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        When you are ready to checkout, go to the shopping bag to review and place your order.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        When you are happy with your final selection click on the proceed to checkout button to finalize you order.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        If you want to use a discount, you can add this in checkout.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        If you are a returning customer and have not yet signed into your account you will now be redirected to a sign in page.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        New customers are asked to create a shopping account. This account ensures that we can give you the best customer service possible and that your future shopping experiences will be effortless.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Are you feeling uncertain about making a purchase and want to wait till tomorrow? No problem! All of the items you found today will be saved in your shopping bag for 7 days. However, these items are not reserved, so there is a risk that we might sell out in your size. Why not order now and see how the items look styled at home?
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Now that you are signed in, you can select your delivery and payment option.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        When ready selecting your preferred delivery and payment method, click the complete purchase button. Once your see the order confirmation on screen, your order is completed.
                    </p>
                </>
            ),
        },
        {
            id: 3,
            title: 'What happened to P and S sizing?',
            content: (
                <>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        We have listened to your feedback and are taking steps to update our standard sizes on both Womenswear and Menswear. We initially introduced P (Women) and S (Men) sizing for improved fit and comfort. We now are adapting further so that these improved fits are actually the measurements that we provide for our standard sizing.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Please check and select your size according to measurements in the new size guides for
                    </p>

                </>
            ),
        },
        {
            id: 4,
            title: 'I received a garment labelled with a different size to my  order? Why?',
            content: (
                <>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        We have listened to your feedback and have taken steps to update our sizes. During a transitional period, we will have garments labelled in either old or new sizing, however, rest assured we will always send you the size that corresponds to what you ordered.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        For example:
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        1) If you order an item in a standard size, you may receive a product labelled with a P or S next to the size (i.e. 34P or 42S).  However, the fit/measurements will match what you ordered, so please try on.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        2) If you ordered an item with a T or L next to the size (i.e. 34T or 42L), you may receive a product not labelled with a T or L. However, the fit/measurements will match what you ordered, so please try on.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Note: If you received the wrong size entirely (i.e. you ordered M but received XL), please contact Customer Service.
                    </p>


                </>
            ),
        },
        {
            id: 5,
            title: 'Can I cancel or amend my order?',
            content: (
                <>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        We start processing your order quickly which means we can’t make any changes once it’s confirmed. This includes changing the delivery address or delivery option.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        However, you may be able to cancel your order and place a new one instead as we have a short grace period after the order is confirmed.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Sign in to My Account and view your online orders under My Purchases. If the ‘Cancel Order’ button is visible, you can select this option and your order will be cancelled. If the button is not visible, it is too late to cancel your order as processing has begun. Should you need to, you can find out about return options instead
                    </p>
                </>
            ),
        },
    ];

    return (
        <>
            {/* Mid data */}
            <div id="accordion-collapse" data-accordion="collapse" className='my-12 mx-20'>
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>

        </>
    )
}

export default Faq;

const AccordionItem = ({ id, title, content, isOpen, onClick }) => {
    return (
        <div>
            <h2 id={`accordion-heading-${id}`}>
                <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border rounded-md my-1 gap-3"
                    onClick={onClick}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-body-${id}`}
                >
                    <span className='hover:text-color3'>{title}</span>
                    <svg
                        className={`w-3 h-3 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                        />
                    </svg>
                </button>
            </h2>
            <div
                id={`accordion-body-${id}`}
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
                aria-labelledby={`accordion-heading-${id}`}
            >
                <div className="p-5 border rounded-md my-1">
                    {content}
                </div>
            </div>
        </div>
    );
};