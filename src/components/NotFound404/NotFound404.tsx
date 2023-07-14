
import React, { FC, PropsWithChildren } from "react";

import styles from './NotFound404.module.css';

export const NotFound404 = () => (
   <div className={`${styles.error404} text text_type_main-small`}>
      Шёл трамвай девятый номер — на площадке кто-то помер
   </div>
)