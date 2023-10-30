import React, { useContext } from 'react'
import qs from 'qs'
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../store/slices/filter/filterSlise'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


import axios from 'axios';
import SushiBlock from '../components/SushiBlock';
import Skeleton from '../components/SushiBlock/Skeleton';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import { useEffect, useState } from 'react';
import SearchContext from '../context/context';

import { Pagination } from '../components/Pagination';
import { useNavigate } from 'react-router-dom';
import { fetchSushi } from '../store/slices/sushi/sushiSlise';

const Home = () => {
    const { categoryId, sort, currentPage, searchValue } = useSelector((state: any) => state.filter)
    const { items, status } = useSelector((state: any) => state.sushi)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id))
    }
    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    useEffect(() => {
        if (window.localStorage.search) {
            const params = qs.parse(window.location.search.substring(1))
            console.log(params)
        }
    }, []);


    // useEffect(() => {
    //     setIsLoading(true)
    //     axios
    //         .get(`https://6529381055b137ddc83e6722.mockapi.io/pizzza?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    //         .then((res) => {
    //             setItem(res.data)
    //             setIsLoading(false)
    //         }).catch(err => {
    //             console.log(err)
    //             setIsLoading(false)
    //         });

    // }, [categoryId, sortType, searchValue, currentPage]);

    const getSushi = async () => {
        const order = sort.sortProperty.includes('-') ? 'abc' : 'desc';
        const sortBy = sort.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            // @ts-ignore
            fetchSushi({
                sortBy,
                order,
                category,
                search,
                currentPage
            })
        );

    }


    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sort,
            categoryId,
            currentPage
        })
        navigate(`?${queryString}`);
        getSushi()
    }, [categoryId, sort, searchValue, currentPage])



    const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
    const sushi = items.filter((obj: any) => {
        if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }
        return false;
    }).map((obj: any) => (<SushiBlock key={obj.id} {...obj} />))

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories categoryId={categoryId} onClickSortByCategory={onChangeCategory} />
                    <Sort />
                </div>
                <h2 className="content__title">Все роллы</h2>
                {
                    status == 'error' ? (
                        <div>
                            <h2>Произошла ошибка</h2>
                            <p>
                                Если проблемма у нас, мы ее скоро исправим:)
                            </p>
                            <br />
                        </div>
                    ) : (
                        <div className="content__items">
                            {status == 'loading'
                                ? skeleton
                                : sushi
                            }</div>
                    )
                }
                <Pagination currentPage={currentPage} onChangePage={onChangePage} />
            </div>
        </>
    )
}

export default Home