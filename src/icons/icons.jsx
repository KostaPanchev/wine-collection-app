import React from 'react';

export const CloseIcon = (props) => (
    <svg className={`svg-icon ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
);
export const MoreIcon = (props) => (
    <svg className={`svg-icon ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
);

export const AddCircleIcon = (props) => (
    <svg className={`svg-icon ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
);

export const AddIcon = (props) => (
    <svg className={`svg-icon ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
);

export const StarFilledIcon = (props) => (
    <svg className={`svg-icon ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
);

export const EditIcon = (props) => (
    <svg className={`svg-icon ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
);

export const DeleteIcon = (props) => (
    <svg className={`svg-icon ${props.className || ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
);



export const WineBottle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="#4ab8a1"/><path d="M284 47.092c0-4.4-3.6-7.092-8-7.092h-40c-4.4 0-8 3.6-8 8v40l8 28v80h-20c-12 0-20 8-20 24v284.86c19.252 4.624 39.328 7.14 60 7.14 68.2 0 130.116-26.724 176-70.196L284 47.092z" fill="#43a691"/><path d="M296 196h-20v-84h-40v84h-20c-12 0-20 8-20 24v284.86c19.252 4.624 39.328 7.14 60 7.14s40.752-2.516 60-7.14V220c0-16-8-24-20-24z" fill="#1a1a1a"/><g fill="#0d0d0d"><path d="M264 112v84h12v-84h-12zM296 196h-12c12 0 20 8 20 24v287.436c4.036-.76 8.036-1.624 12-2.584v-284.86C316 204 308 196 296 196z"/></g><path d="M244 204h-16c-10.304 0-24 2.488-24 24v278.704c2.644.548 5.328.988 8 1.448V228c0-13.384 5.868-16 16-16h20c2.212 0 4-1.792 4-4v-72h-8v68z" opacity=".2" fill="#f5f5f5"/><path fill="#992b1f" d="M196 272h120v108H196z"/><path fill="#ffe1d9" d="M196 284h120v84H196z"/><path d="M284 88c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8V48c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z" fill="#cc584c"/><path d="M276 40h-8c4.4 0 8 3.6 8 8v40c0 4.4-3.6 8-8 8h8c4.4 0 8-3.6 8-8V48c0-4.4-3.6-8-8-8z" fill="#bf5347"/><path fill="#cc584c" d="M236 96h40v16h-40z"/><g fill="#bf5347"><path d="M268 96h8v16h-8z"/><path d="M236 96h40v8h-40z"/></g><path d="M240 88c-2.212 0-4-1.792-4-4V48c0-2.208 1.788-4 4-4s4 1.792 4 4v36c0 2.208-1.788 4-4 4z" fill="#e66356"/></svg>
);
