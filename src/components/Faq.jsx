import React from 'react'
import { faqData } from '../faqData'
import { useState } from 'react'

const Faq = () => {

    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <>
            <div className="faq_hero">
                <div className="faq_body">
                    <h1>Sizə necə kömək edə bilərik?</h1>
                </div>
            </div>
            <div className="faq_container">
                <div className="faq_description">
                    <h2>FAQ</h2>
                    <p>Tez-tez verilən suallar</p>
                </div>
                <div className="faq_main">
                    {faqData.map((faqData, i) => (
                        <div key={faqData.id} className="faq_accordion">

                            <div className="faq_question" onClick={() => toggle(i)}>
                                <h2 className={selected === i ? 'faq-color show' : 'faq-color'}>{faqData.question}</h2>
                                <i className={selected === i ? 'fa-solid fa-angle-down rotate down' : 'fa-solid fa-angle-down rotate'}></i>
                            </div>

                            <div className={selected === i ? 'faq_content show' : 'faq_content'}> <p>{faqData.answer}</p> </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Faq