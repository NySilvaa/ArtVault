"use client";

import { useState } from "react";
import styles from "@/public/css/configuration.module.css";
import { updateAccountConfig } from "@/app/actions/UpdateUser";
import { updateUserPhotosAction } from "@/app/actions/UpdateUser";

export default function ConfigurationForm() {
    // Estados para os textos
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [biography, setBiography] = useState("");
    const [loadingText, setLoadingText] = useState(false);

    // Estados para as imagens
    const [mainImg, setMainImg] = useState(null);
    const [secondImg, setSecondImg] = useState(null);
    const [thirdImg, setThirdImg] = useState(null);
    const [loadingImg, setLoadingImg] = useState(false);

    // Função para atualizar textos
    const handleTextUpdate = async () => {
        setLoadingText(true);
        try {
            const variables = {
                username: username !== "" ? username : undefined,
                email: email !== "" ? email : undefined,
                biography: biography !== "" ? biography : undefined,
            };

            const result = await updateAccountConfig(variables);

            if (result) {
                alert("Dados atualizados com sucesso!");
                setUsername("");
                setEmail("");
                setBiography("");
            }
        } catch (error) {
            console.error("Erro ao atualizar:", error);
            alert("Ocorreu um erro ao atualizar os dados.");
        } finally {
            setLoadingText(false);
        }
    };

    const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); // Converte a imagem em uma string gigante de texto
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
    };

    const handleImageUpdate = async () => {
    setLoadingImg(true);
    try {
        const photosArray = [];

        // Verifica se cada imagem foi selecionada, converte para texto e adiciona ao array
        if (mainImg) {
            const base64Main = await fileToBase64(mainImg);
            photosArray.push(base64Main);
        }
        
        if (secondImg) {
            const base64Second = await fileToBase64(secondImg);
            photosArray.push(base64Second);
        }
        
        if (thirdImg) {
            const base64Third = await fileToBase64(thirdImg);
            photosArray.push(base64Third);
        }

        const result = await updateUserPhotosAction(photosArray);
        
        if (result && result.success) {
            alert("Fotos atualizadas com sucesso!");
            setMainImg(null);
            setSecondImg(null);
            setThirdImg(null);
        } else {
            alert("Erro ao salvar: " + (result?.error || "Erro desconhecido"));
        }

    } catch (error) {
        console.error("Erro ao atualizar fotos:", error);
        alert("Ocorreu um erro ao enviar as fotos.");
    } finally {
        setLoadingImg(false);
    }
};

    return (
        <div className={`${styles.container} container`}>
            <div className={styles.panel_content}>
                
                <div className={`${styles.content_card} p_relative w100`}>
                    <div className={`${styles.card_header} d_flex`}>
                        <div className={`${styles.card_icon} d_flex`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </div>
                        <h3 className={`${styles.card_title} txtWhite`}>User Config</h3>
                    </div>

                    <div className={`${styles.toggle_group} d_flex`}>
                        {/* Input de Username */}
                        <div className={`${styles.toggle_item} d_flexComplet`}>
                            <div className={styles.toggle_info}>
                                <h4 className="txtWhite">Change UserName</h4>
                                <p>Change Your Username</p>
                            </div>
                            <div className={styles.form}>
                                <input
                                    className={`${styles.input} txtWhite w100`}
                                    placeholder="Type Your New Name"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <span className={`${styles.input_border} p_absolute`}></span>
                            </div>
                        </div>

                        {/* Input de E-mail */}
                        <div className={`${styles.toggle_item} d_flexComplet`}>
                            <div className={styles.toggle_info}>
                                <h4 className="txtWhite">Change E-mail</h4>
                                <p>Change Your E-mail</p>
                            </div>
                            <div className={styles.form}>
                                <input
                                    className={`${styles.input} txtWhite w100`}
                                    placeholder="Type Your New E-mail"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <span className={`${styles.input_border} p_absolute`}></span>
                            </div>
                        </div>

                        {/* Input de Biografia */}
                        <div className={`${styles.toggle_item} d_flexComplet`}>
                            <div className={styles.toggle_info}>
                                <h4 className="txtWhite">Change Your Bio</h4>
                                <p>What&apos;s on Your Mind?</p>
                            </div>
                            <div className={`${styles.form} p_relative`}>
                                <input
                                    className={`${styles.input} txtWhite w100`}
                                    placeholder="Type Your New Biography"
                                    type="text"
                                    value={biography}
                                    onChange={(e) => setBiography(e.target.value)}
                                />
                                <span className={`${styles.input_border} p_absolute`}></span>
                            </div>
                        </div>
                    </div>
                    <span className={`${styles.warning} d_inlineBlock`}>* If any field is empty, the old value will be kept.</span>

                    <button
                        onClick={handleTextUpdate}
                        disabled={loadingText}
                        id={`${styles.changements}`}
                        className={`p_absolute txtWhite bgGold ${loadingText ? "opacity-50" : ""}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                        {loadingText ? " Saving..." : " Confirm Changements"}
                    </button>
                </div>

                {/* --- CARD DE CONFIGURAÇÃO DE FOTOS --- */}
                <div className={`${styles.content_card} p_relative`}>
                    <div className={`${styles.card_header} d_flex`}>
                        <div className={`${styles.card_icon} d_flex`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                        </div>
                        <h3 className={`${styles.card_title} txtWhite`}>User Photos</h3>
                    </div>

                    <div className={`${styles.toggle_group} d_flex`}>
                        {/* Main Photo */}
                        <div className={`${styles.toggle_item} d_flexComplet`}>
                            <div className={styles.toggle_info}>
                                <h4 className="txtWhite">Change Main Photo</h4>
                                <p>Select Your Best Photo</p>
                            </div>
                            <button className={`${styles.file} d_flex txtWhite txtCenter bgGold`}>
                                {/* SVG Ícone */}
                                <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeWidth="2" stroke="#fffffff" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" strokeLinejoin="round" strokeLinecap="round"></path>
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#fffffff" d="M17 15V18M17 21V18M17 18H14M17 18H20"></path>
                                </svg>
                                
                                <label htmlFor="mainImg" style={{ cursor: "pointer", width: "100%" }}>
                                    {mainImg ? mainImg.name : "ADD FILE"}
                                </label>
                                <input 
                                    type="file" 
                                    id="mainImg" 
                                    className={styles.mainImg} 
                                    style={{ display: 'none' }} // Esconde o input real para usar apenas o label estlizado
                                    onChange={(e) => setMainImg(e.target.files[0])}
                                    accept="image/*"
                                />
                            </button>
                        </div>

                        <div className={`${styles.profile_wp} d_flex`}>
                            {/* Secondary Photo */}
                            <div className={`${styles.toggle_item} d_flexComplet w50`}>
                                <div className={styles.toggle_info}>
                                    <h4 className="txtWhite">Secondary Photo</h4>
                                    <p>Select the Second One</p>
                                </div>
                                <button className={`${styles.file} d_flex txtWhite txtCenter bgGold`}>
                                    <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeWidth="2" stroke="#fffffff" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" strokeLinejoin="round" strokeLinecap="round"></path>
                                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#fffffff" d="M17 15V18M17 21V18M17 18H14M17 18H20"></path>
                                    </svg>
                                    <label htmlFor="secondImg" style={{ cursor: "pointer", width: "100%" }}>
                                        {secondImg ? secondImg.name : "ADD FILE"}
                                    </label>
                                    <input 
                                        type="file" 
                                        id="secondImg" 
                                        className={styles.secondImg} 
                                        style={{ display: 'none' }}
                                        onChange={(e) => setSecondImg(e.target.files[0])}
                                        accept="image/*"
                                    />
                                </button>
                            </div>

                            {/* Third Photo */}
                            <div className={`${styles.toggle_item} d_flexComplet w50`}>
                                <div className={styles.toggle_info}>
                                    <h4 className="txtWhite">Select Third Photo</h4>
                                    <p>Photos Complimentaries</p>
                                </div>
                                <button className={`${styles.file} d_flex txtWhite txtCenter bgGold`}>
                                    <svg aria-hidden="true" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeWidth="2" stroke="#fffffff" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" strokeLinejoin="round" strokeLinecap="round"></path>
                                        <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#fffffff" d="M17 15V18M17 21V18M17 18H14M17 18H20"></path>
                                    </svg>
                                    <label htmlFor="thirdImg" style={{ cursor: "pointer", width: "100%" }}>
                                        {thirdImg ? thirdImg.name : "ADD FILE"}
                                    </label>
                                    <input 
                                        type="file" 
                                        id="thirdImg" 
                                        className={styles.thirdImg} 
                                        style={{ display: 'none' }}
                                        onChange={(e) => setThirdImg(e.target.files[0])}
                                        accept="image/*"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <span className={`${styles.warning} d_inlineBlock`}>* If any field is empty, the old value will be kept.</span>

                    <button 
                        onClick={handleImageUpdate}
                        disabled={loadingImg}
                        id={`${styles.changements}`} 
                        className={`p_absolute txtWhite bgGold ${loadingImg ? "opacity-50" : ""}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil p_relative"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg> 
                        {loadingImg ? " Saving..." : " Confirm Changements"}
                    </button>
                </div>

            </div>
        </div>
    );
}