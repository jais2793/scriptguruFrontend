import React, { useState, useEffect } from 'react';

const CategoryDropdown = ({ data }) => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubcategories, setActiveSubcategories] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleHover = (index) => {
        setActiveDropdown(index);
        setActiveSubcategories(null);
    };

    const handleLeave = () => {
        setActiveDropdown(null);
        setActiveSubcategories(null);
    };

    const subHandleHover = (index) => {
        setActiveSubcategories(index);
    };

    const subHandleLeave = () => {
        setActiveSubcategories(null);
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            // Reset activeDropdown and activeSubcategories on resize
            setActiveDropdown(null);
            setActiveSubcategories(null);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (

        <div className={screenWidth >= 1000 ? 'flex flex-row gap-1 justify-evenly' : 'flex flex-row gap-1 justify-between overflow-x-auto overflow-y-hidden'}>
            {data.map((item, index) => (
                <div
                    key={index}
                    style={{
                        position: 'relative',
                        margin: '0 10px',
                        zIndex: '999',
                    }}
                    className='text-center'
                    onMouseEnter={() => (screenWidth >= 1000 ? handleHover(index) : null)}
                    onMouseLeave={() => (screenWidth >= 1000 ? handleLeave() : null)}
                >
                    <img src={item.imageurl} className='h-20 cursor-pointer' alt={item.label} />
                    <button>{item.label}</button>
                    {(activeDropdown === index || activeSubcategories === index) && screenWidth >= 1000 && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: `${index == 0 ? '0' : '-100px'}`,
                                backgroundColor: '#f9f9f9',
                                border: '1px solid #ccc',
                                minWidth: '230px',
                                zIndex: '999',
                            }}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleLeave()}
                        >
                            {item?.categories && (
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                    {item.categories.map((subitem, subindex) => (
                                        <li
                                            key={`${subindex}si`}
                                            onMouseEnter={() => subHandleHover(`${subindex}si`)}
                                            className='hover:bg-blue-gray-100 transition duration-300 flex justify-between'
                                        >
                                            <a href={subitem.link} className='text-medium p-4'>{subitem.label}</a>
                                            {subitem?.subcategories && (
                                                <span className="material-symbols-outlined relative top-3">
                                                    chevron_right
                                                </span>
                                            )}

                                            {activeSubcategories === `${subindex}si` && subitem?.subcategories && (
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        top: '0',
                                                        left: '100%',
                                                        backgroundColor: '#f9f9f9',
                                                        border: '1px solid #ccc',
                                                        minWidth: '230px',
                                                        zIndex: '999',

                                                    }}
                                                    onMouseEnter={() => subHandleHover(`${subindex}si`)}
                                                    onMouseLeave={() => subHandleLeave()}
                                                >
                                                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                                                        {subitem.subcategories.map((subitem2, subindex2) => (
                                                            <li key={subindex2} className=' hover:bg-blue-gray-100 transition duration-300 flex justify-between'>
                                                                <a href={subitem2.link} className='text-medium p-4'>{subitem2.label}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CategoryDropdown;
