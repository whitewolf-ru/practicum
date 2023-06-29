
import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { orderUpload } from "../../services/actions/order";
import styles from './OrderDetails.module.css';
import burger from '../../images/burger.jpg';
import styles_global from "./../../styles.module.css";
import { TconstructorElement } from '../../utils/types'

function OrderDetails() {

   const { items } = useSelector((store: any) => store.constructorItems);
   const dispatch = useDispatch();

   let data: string[] = [];

   if (items) items.map((ingredient: TconstructorElement) => data.push(ingredient._id));

   useEffect(() => dispatch(orderUpload(data) as any), []);

   const orderId = useSelector((state: any) => state.order.orderId);

   return (
      <div className={styles_global.page}>
         <p className={`${styles.digits} text text_type_digits-large`}>{orderId}</p>
         <p className={`${styles.text} text_type_main-medium`}>Идентификатор заказа</p>
         <img src={burger} alt="done" className={styles.done} />
         <p className={`${styles.text} text_type_main-default`}>Ваш заказ начали готовить</p>
         <p className={`${styles.text} text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
      </div>
   )
}

export default OrderDetails;
