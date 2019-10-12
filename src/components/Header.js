import React from 'react'
import perfil from '../assets/perfil1.jpg'
import './styles.css'

export default function Header() {
    return(
        <>
            <header className="sans-serif">
                <div className="mw9 db center pa4 pt5-ns ph7-l">
                    <time className="f6 mb2 pointer white dib tracked"><small>@rafaewo :</small></time>

                    <div className='flex items-center justify-between'>
                    <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
                        <span className="bg-black-60 code lh-copy white pa1 tracked-tight">
                            a jedi you seek, huh?
                        </span>
                    </h3>
                    <img src={perfil} alt='minha foto' className='profile pa2 grow shadow-3 bg-light-gray' />
                    </div>

                    <p className="f3 fw-1 white code">
                            Um pouco sobre mim, de onde eu vim e para onde almejo ir
                    </p>
                    <p className="f6 ttu white tracked black-80">Rafael Cunha</p>
                </div>
            </header>
        </>
    );
}
