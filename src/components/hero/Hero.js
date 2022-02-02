import '../../Global/global.css';
import './images/data';
import React,{useState} from 'react';
import Mac from './images/data';
import Images from './images/Images';
import MainImg from './images/MainImg';

const Hero = () => {
    const [stateOzu,setStateOzu] = useState(8);
    const [stateMem,setStateMem] = useState(256);
    const [stateCol,setStateCol] = useState('Gold');
    const [stateColBtn,setStateColBtn] = useState(1);
    const [stateStock,setStateStock] = useState(1);

    const change = (e) => {
        let targ = e.target.id;
        let val = e.target.value;
        if(targ.includes('ozu')){
            setStateOzu(val);
        }else if(targ.includes('memor')){
            setStateMem(val);
        }else if(targ.includes('color')){
            setStateCol(val);
            if(val === 'Silver'){
                setStateColBtn(0);
            }else if(val === 'Gold'){
                setStateColBtn(1);

            }else if(val === 'Grey'){
                setStateColBtn(2);
            }
        }
    }

    const stockChange = (e) => {
        const targ = e.target.classList[1];
            if(targ.includes('plus')){
                setStateStock(stateStock+1)
            }else if(stateStock > 1){
                if(targ.includes('minus')){
                setStateStock(stateStock-1)
            }
        }
    }

    return(
        <div className="hero">
            <div className="hero__left left">
                <div className="left__img-box">
                    {<MainImg item={Mac[stateColBtn][1]}/>}
                </div>
                <div className="left__btns">
                    {Mac[stateColBtn].map((item) => (<Images item={item}/>) )}
                </div>
            </div>
             <div className="hero__right right">
                <h2 className="right__title">MacBook Air 13-inch</h2>
                <p className="right__charac charac">M1/<span className="charac__ozu">{stateOzu}gb</span>/<span
                        className="charac__mem">{stateMem}gb</span> <span className="charac__color">{stateCol}</span></p>
                <form onChange={change} className="right__form form">
                    <h3 className="form__static-title">Ram</h3>
                    <div className="form__ozu form-div">
                        <div className="form__group ozu8 dib">
                            <input className="form__input form__input-ozu" type="radio" id="ozu8" name="ozu" value='8' defaultChecked />
                            <label className="form__label" htmlFor="ozu8">8GB</label>
                        </div>
                        <div className="form__group ozu16">
                            <input className="form__input form__input-ozu" type="radio" id="ozu16" name="ozu" value='16' />
                            <label className="form__label" htmlFor="ozu16">16GB</label>
                        </div>
                    </div>
                    <h3 className="form__static-title">Xotira Hajmi</h3>
                    <div className="form__memor form-div">
                        <div className="form__group memor256 memor-group">
                            <input className="form__input form__input-memor" type="radio" id="memor256" name="memor" value='256' defaultChecked />
                            <label className="form__label" htmlFor="memor256">256GB</label>
                        </div>
                        <div className="form__group memor512 memor-group">
                            <input className="form__input form__input-memor" type="radio" id="memor512"
                                name="memor" value='512' />
                            <label className="form__label" htmlFor="memor512">512GB</label>
                        </div>
                        <div className="form__group memor1 memor-group">
                            <input className="form__input form__input-memor" type="radio" id="memor1" name="memor" value='1' />
                            <label className="form__label" htmlFor="memor1">1TB</label>
                        </div>
                    </div>
                    <h3 className="form__static-title">Ranglar</h3>
                    <div className="form__color form-div">
                        <div className="form__group form__group-color color-gold">
                            <input className="form__input form__input-color" type="radio" id="color-gold" name="color" value='Gold' defaultChecked />
                            <label className="form__label form__label-color" htmlFor="color-gold">Tilla rang</label>
                        </div>
                        <div className="form__group form__group-color color-silver">
                            <input className="form__input form__input-color" type="radio" id="color-silver"
                                name="color" value="Silver" />
                            <label className="form__label form__label-color" htmlFor="color-silver">Kumush rang</label>
                        </div>
                        <div className="form__group form__group-color color-grey">
                            <input className="form__input form__input-color" type="radio" id="color-grey"
                                name="color" value="Grey" />
                            <label className="form__label form__label-color" htmlFor="color-grey">Kosmik kulrang</label>
                        </div>
                    </div>
                    <div className="form__price-div">
                        <div className="form__price-box">
                            <p onClick={stockChange} className="form__price form__price-minus">-</p>
                            <p className="form__price-inp">{stateStock}</p>
                            <p onClick={stockChange} className="form__price form__price-plus">+</p>
                        </div>
                        <h3 className="form__price-text"><span className="form__pric">11 550 000</span> so'm</h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero;