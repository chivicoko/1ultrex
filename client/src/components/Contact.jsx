
import { useTranslation } from 'react-i18next';
import i18next from 'i18next'
import { useEffect } from 'react';

const Contact = () => {
    const { t } = useTranslation(["common"]);

    useEffect(() => {
      if (localStorage.getItem("i18nextLng")?.length > 2) {
        i18next.changeLanguage('en');
      }
    }, [])
      
  return (
    <>
        <section className='heading'>
            <h1 style={{color: 'white'}}>{t('Support Form')}</h1>
        </section>

        <section className='form'>
            <form onSubmit={''}>
                <div className="form-group">
                    <input type="email" className="form-control" id='email' name='email' placeholder={t('Enter your email')} onChange={''} />
                </div>
                <div className="form-group">
                    <textarea name="message" id="message" cols="30" rows="6" placeholder={t('Write message...')}></textarea>
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>{t('Submit')}</button>
                </div>
            </form>
        </section>
    </>
    
  )
}

export default Contact;