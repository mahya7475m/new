import React from 'react'
import styles from "../../styles/Home.module.css";
// import forms from '../../styles/forms.css'

const componentName = () => {
    return (
        <div className={styles.conent}>
            <div className={styles.page}>
                <div className={styles.page1}>
                    <div className={styles.head}>
                        <p > خانه/ثبت رایگان آگهی </p>
                    </div>

                    <div className={styles.form1} >
                        <form className={styles.container} >
                            <div className={styles.formgroup}>
                                <label> دسته بندی آکهی</label>
                                <select className={styles.selects}  >
                                    <option value="Ford">کودشیمیایی</option>
                                    <option value="Volvo">کودشیمیایی</option>
                                    <option value="Fiat">کودشیمیایی</option>
                                </select>
                            </div>

                            <div className={styles.formgroup}>
                                <label> نام مدیر عامل</label>
                                <input className={styles.inputs} type="text" placeholder="مهدی سرافراز" />
                            </div>

                            <div className={styles.formgroup}>
                                <label> عنوان آکهی</label>
                                <input className={styles.inputs} type="text" placeholder="فروش هیدروژن مایع " />
                            </div>

                            <div className={styles.formgroup}>
                                <label> حوزه صنعت </label>
                                <input className={styles.inputs} type="text" placeholder="  چسب ,رنگ,ساختمانی ,پلیمر و پلاستیک,نفت" />
                            </div>

                            <div className={styles.formgroup}>
                                <label> زمینه فعالیت  </label>
                                <select className={styles.selects}  >
                                    <option value="Ford">تولیدکننده</option>
                                    <option value="Volvo">تولیدکننده</option>
                                    <option value="Fiat">تولیدکننده</option>
                                </select>
                            </div>

                            <div className={styles.formgroup}>
                                <label> آدرس سایت   </label>
                                <input className={styles.inputs} type="text" placeholder="www.sarfraz.org " />
                            </div>

                            <div className={styles.formgroup}>
                                <label> کشور تولیدکننده محصول </label>
                                <select className={styles.selects}  >
                                    <option value="Ford">چین</option>
                                    <option value="Volvo">چین</option>
                                    <option value="Fiat">چین</option>
                                </select>
                            </div>

                            <div className={styles.formgroup}>
                                <label>  اطلاعات تماس  </label>
                                <input className={styles.inputs} type="text" placeholder="021-44558555" />
                            </div>
                            <div className={styles.formgroup}>
                                <label>   بارگذاری تصویر  </label>
                                <div className={styles.formgroupimg} >
                                    <img src="/assets/index.png" className={styles.forrgroup} />
                                    <img src="/assets/index.png" className={styles.forrgroup} />
                                    <img src="/assets/index.png" className={styles.forrgroup} />
                                    <img src="/assets/index.png" className={styles.forrgroup} />

                                </div>

                            </div>

                            <div className={styles.formgroup}>
                                <label >موقعیت آکهی   </label>
                                <input className={styles.inputs, styles.inputses} type="text" placeholder="کرج گلشهر" />
                            </div>

                            <div className={styles.formgroup}  >
                                <label >توضیحان آکهی   </label>
                                <p className={styles.inputss}>تهران یوسف آباد خیابان گل محمدی</p>
                            </div>
                            <div className={styles.formgroup}>
                                <label > آدرس   </label>
                                <p className={styles.inputss}>تهران یوسف آباد خیابان گل محمدی</p>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={styles.form2}>
                    <div className={styles.gradients1}>
                        <p>به تلگرام ایران شیمی بپیوندید</p>
                        <div className={styles.insideimg}>
                        </div>
                    </div>

                    <div className={styles.gradients2}>
                        <div className={styles.insideimg}>
                            <p className={styles.gradients3}> نمایشگاه مجازی تامین کنندگان مواد اولیه شیمیایی</p>
                        </div>
                    </div>

                    <div className={styles.gradients4}>
                        <p className={styles.gradients5}> اسامی شرکت ها</p>

                    </div>
                    <hr className={styles.navimg1} />

                    <div className={styles.navimg}>
                        <div className={styles.navimginsideimg}>
                            <img src="/assets/cat-lavazem.jpg" className={styles.gradients6}></img>
                            <p className={styles.gradients7}>شیمی و دنیای آن</p>
                            <p className={styles.gradients8}> بیست دقیقه پیش</p>

                        </div>



                        <div className={styles.navimginsideimg}>
                            <img src="/assets/cat-mavad.jpg" className={styles.gradients6}></img>
                            <p className={styles.gradients7}>شکست فیزیک در مقابل شیمی</p>
                            <p className={styles.gradients8}> بیست دقیقه پیش</p>

                        </div>


                        <div className={styles.navimginsideimg}>
                            <img src="/assets/cat-shishe.jpg" className={styles.gradients6}></img>
                            <p className={styles.gradients7}>اخبار شیمی و دیگر هیچ</p>
                            <p className={styles.gradients8}> بیست دقیقه پیش</p>


                        </div>

                        <div className={styles.navimginsideimg}>
                            <img src="/assets/cat-tajhizat.jpg" className={styles.gradients6}></img>
                            <p className={styles.gradients7}>اخبار شیمی و دیگر هیچ</p>
                            <p className={styles.gradients8}> بیست دقیقه پیش</p>
                            <p className={styles.gradients9}> بیست دقیقه پیش</p>



                        </div>

                    </div>

                    <button type="text" className={styles.btn} >ثبت آکهی جدید شرکت</button>


                    <hr></hr>
                </div>
            </div>
        </div >
    )
}

export default componentName


