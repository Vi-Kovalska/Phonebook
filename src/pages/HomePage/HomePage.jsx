import React from 'react'
import s from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={s.pageContentWrapper}>
          <h2 className={s.headerApp}>The Phonebook</h2>
      <p className={s.descriptionApp}>It's an application with the ability to authenticate and authorize to work with a private contact book. Now all your contacts are at hand, you can add, delete, edit a contact or use a search filter by name or phone number.</p>
      <p className={s.descriptionAppTechnology}>Written on React library with Redux for convenient manipulation of states, also used Axios with async/await method for correct requests to the backend. Swigger and Postman are used to work with the backend. The application is divided into private and public routes, so your contacts are visible only to your account.</p>
        <div className={s.wrapperAvatarDevWithSummary}>
        <img className={s.avatar} src="/viktoriia-kovalska-developer.JPG" alt="Viktoriia Kovalska" width={100} height={200} />
        <div>
          <h2 className={s.headerGreetingsByDev}>Hi! My name is Viktoriia!</h2>
          <p className={s.summary}>I am a 25-year-old Full Stuck Developer with one year of experience. Focused on creating user-friendly and responsive applications, writing clean, efficient and easy-to-maintain code. I always strive to learn current trends and best practices.</p>
        </div>
        </div>
         <h3 className={s.headerListCooperate}>Glad to cooperate:</h3>
          <ul className={s.listCooperate}>
        <li className={s.itemCooperate}>
          <svg className={s.icon} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={18} height={18} fill={"currentColor"} viewBox="0 0 32 32"><path d="M16 .395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182.8.148 1.094-.347 1.094-.77 0-.381-.015-1.642-.022-2.979-4.452.968-5.391-1.888-5.391-1.888-.728-1.849-1.776-2.341-1.776-2.341-1.452-.993.11-.973.11-.973 1.606.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33.143-1.034.558-1.74 1.016-2.14-3.554-.404-7.29-1.777-7.29-7.907 0-1.747.625-3.174 1.649-4.295-.166-.403-.714-2.03.155-4.234 0 0 1.344-.43 4.401 1.64a15.353 15.353 0 0 1 4.005-.539c1.359.006 2.729.184 4.008.539 3.054-2.07 4.395-1.64 4.395-1.64.871 2.204.323 3.831.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895.574.497 1.085 1.47 1.085 2.963 0 2.141-.019 3.864-.019 4.391 0 .426.288.925 1.099.768C27.421 29.457 32 23.462 32 16.395c0-8.837-7.164-16-16-16z"/></svg>
          <a className={s.linkCooperate} href="https://github.com/Vi-Kovalska" target='_blank'>GitHub</a></li>
        <li className={s.itemCooperate}>
          <svg className={s.icon} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width={18} height={18} fill={"currentColor"} viewBox="0 0 32 32">
            <path d="M29 0H3C1.35 0 0 1.35 0 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM12 26H8V12h4v14zm-2-16c-1.106 0-2-.894-2-2s.894-2 2-2c1.106 0 2 .894 2 2s-.894 2-2 2zm16 16h-4v-8c0-1.106-.894-2-2-2s-2 .894-2 2v8h-4V12h4v2.481C18.825 13.35 20.087 12 21.5 12c2.488 0 4.5 2.238 4.5 5v9z" /></svg>
          <a className={s.linkCooperate} href="https://www.linkedin.com/in/viktoriia-kovalska-b79398326/" target='_blank'>LinkedIn</a></li>
</ul>
    </div>
  )
}

export default HomePage