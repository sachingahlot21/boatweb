import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Search from '../context/SearchCon'
import neckBandsList from '../productslist/neckBands/neckBands'
import smartWatchesList from '../productslist/smartWatches/smartWatches'
import wiredHeadphonesList from '../productslist/wiredHeadphones/wiredHeadphones'
import productListWEB from '../productslist/wirelessEarbuds/wirelessearbuds'
import wirelessHeadphonesList from '../productslist/wirelessHeadphones/wirelessHeadphones'
import wirelessSpeakersList from '../productslist/wirelessSpeakers/wirelessSpeakers'
import MainTemplate from '../categories/MainTemplate'
import { debounce } from '@mui/material'

function SearchData() {
    const { searchQuery } = useContext(Search)
    const { setSearchLength } = useContext(Search)

    const { searchLength } = useContext(Search)
    const allProducts = [...productListWEB, ...wiredHeadphonesList, ...smartWatchesList, ...neckBandsList];

    const [searchResults, setSearchResults] = useState([]);



    useEffect(() => {

        const delayedSearch = debounce(() => {
            if (searchResults.length !== 0) {
                setSearchLength(searchResults.length);
            }
            else {
                setSearchLength(0);
            }
        }, 900)

        delayedSearch()

        return () => clearTimeout(delayedSearch)


    }, [searchResults, setSearchLength]);

    useEffect(() => {

        if (searchQuery !== '') {
            const filteredResults = allProducts.filter((product) =>

                product.productid.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.itemName.toLowerCase().includes(searchQuery.toLowerCase())

            );
            setSearchResults(filteredResults);

        } else {
            setSearchResults([]);
            setSearchLength(0);
            // if (prevSearchQuery !== '') {
            //     setSearchLength(0); // Reset search length when search query is empty
            // }
        }

    }, [searchQuery]);

    return (

        <div className='md:w-screen md:h-auto  pl-8 pt-[150px]'>
            <div className='text-2xl text-black font-bold'>Showing {searchLength} Result(s) for "{searchQuery}"</div>
            <div className='mt-2 flex flex-wrap '>

                {
                    searchResults.map((product) => (
                        <MainTemplate
                            // usp={product.usp}
                            // image={product.image}
                            // offer={product.offer}
                            // rating={product.rating}
                            // sold={product.sold}
                            // price={product.price}
                            // discount={product.discount}
                            // priceBefore={product.priceBefore}
                            // itemName={product.itemName}
                            // usp2={product.usp2}
                            // usp3={product.usp3}
                            // productid={product.productid}
                            prop={product}
                            key={product.id}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default SearchData