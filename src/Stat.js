import React, {useState, useEffect} from 'react';
import {headPrefixes, headSufixes, headMainPart} from './Items'

function Stat() {

    const [playerDex, setPlayerDex] = useState(0);
    const [playerLevel, setPlayerLevel] = useState(0);
    const [playerSpost, setPlayerSpost] = useState(0);
    const [str, setStr] = useState(0);
    const [def, setDef] = useState(0);
    const [look, setLook] = useState(0);
    const [char, setChar] = useState(0);
    const [wpl, setWpl] = useState(0);
    const [int, setInt] = useState(0);
    const [wis, setWis] = useState(0);
    const [luck, setLuck] = useState(0);
    const [baseHp, setBaseHp] = useState(0);
    const [blood, setBlood] = useState(0);
    const [calculatetBaseHp, setcalculatedBaseHp] = useState(0);

    const [evoLevels, setEvoLevels] = useState(0);


    const [finalDex, setFinalDex] = useState(0);
    const [finalSpost, setFinalSpost] = useState(0);
    const [beheMultiplier, setBeheMultiplier] = useState(0);
    const [dexFromTalisman, setDexFromTalisman] = useState(0);
    const [spostFromTalisman, setSpostFromTalisman] = useState(0);

    const [beheDex, setbeheDex] = useState(0);
    const [beheSpost, setbeheSpost] = useState(0);

    const [levels, setLevels] = useState(0);
    const [maxLevels, setMaxLevels] = useState(0);
    const [additionalHit, setAdditionalHit] = useState(0);
    const [bossSpost, setBossSpost] = useState(0);
    const [bossDex, setBossDex] = useState(0);
    const [race, setRace] = useState({luck: 0, hpMod: 0});


    const [firstWeapon, setFirstWeapon] = useState({hpMod: 0, luck: 0});
    const [secondWeapon, setSecondWeapon] = useState({luck: 0, hpMod: 0});
    const [firstRing, setfirstRing] = useState({luck: 0, hpMod: 0});
    const [secondRing, setSecondRing] = useState({luck: 0, hpMod: 0});

    const [headPref, setHeadPref] = useState({luck: 0, hpMod: 0, spost: 0, dex: 0});
    const [headSuf, setHeadSuf] = useState({luck: 0, hpMod: 0, spost: 0, dex: 0});
    const [headMain, setHeadMain] = useState({luck: 0, hpMod: 0, spost: 0, dex: 0});


    const [chest, setChest] = useState({luck: 0, hpMod: 0});
    const [legs, setLegs] = useState({luck: 0, hpMod: 0});

    const handleFocus = (event) => event.target.select();

    const missingLevelsPercent = ((maxLevels - levels) / maxLevels);

    const additionalToHit = (parseInt(maxLevels) - parseInt(levels)) * missingLevelsPercent;

    const some = (70 + (3 * parseInt(bossDex)) + parseInt(additionalToHit));
    const dexHit = some - (3 * playerDex);

    const suma = (70 + (3 * (parseInt(bossDex) + parseInt(bossSpost))) + parseInt(additionalToHit));
    const sumaHit = suma - (3 * (parseInt(playerDex) + parseInt(playerSpost)));


    const dexFromBehe = (parseInt(str) * beheMultiplier);
    const spostFromBehe = (parseInt(int) + parseInt(wis)) * beheMultiplier;


    const setTalismanDex = (talismanLevel) => setDexFromTalisman(15 * talismanLevel);

    const setTalismanSpost = (spostFromTalisman) => setSpostFromTalisman(spostFromTalisman);

    const onChange = selectedOption => setFirstWeapon(JSON.parse(selectedOption.target.value));
    const onHeadPrefChange = selectedOption => setHeadPref(JSON.parse(selectedOption.target.value));
    const onHeadMainChange = selectedOption => setHeadMain(JSON.parse(selectedOption.target.value));
    const onHeadSufChange = selectedOption => setHeadSuf(JSON.parse(selectedOption.target.value));


    return (
        <>
            <p>

                final
                dex: {(parseInt(playerDex) || 0) + (parseInt(dexFromBehe) || 0) + (parseInt(dexFromTalisman) || 0) + (parseInt(headMain.dex) || 0) + (parseInt(headPref.dex) || 0) + (parseInt(headSuf.dex) || 0)}

            </p>
            <p>

                final spost: {parseInt(playerSpost) + parseInt(spostFromBehe) + parseInt(spostFromTalisman)}
            </p>
            <p>

                final hp: {Math.ceil(parseInt(baseHp) + (parseInt(baseHp) * race.hpMod) + (parseInt(baseHp) * firstWeapon.hpMod))}
            </p>
            <p>

                final luck: {parseInt(luck) + race.luck}
            </p>
            <div>
                Moj level:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={playerLevel}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => {
                        setPlayerLevel(e.target.value);
                        setEvoLevels((parseInt(e.target.value) - 65));

                        let hpBase = 0;

                        let s;
                        for (s = 0; s <= levels; s++) {
                            hpBase = hpBase + 4 + (s / 10);
                            if (s % 10 === 0) {
                                hpBase = hpBase + (s - 1);
                            }
                        }
                        setcalculatedBaseHp(hpBase);
                    }}
                />
                <label style={{paddingLeft: 30}}>Wolne punkty evo: {evoLevels}</label>
            </div>
            <div>
                Moja krew:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={blood}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setBlood(e.target.value)}
                />
            </div>
            <div>
                Base hp:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={baseHp}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setBaseHp(e.target.value)}
                />
                <label style={{paddingLeft: 20}}>
                    Modyfikator z broni: {firstWeapon.hpMod} %
                </label>

            </div>
            <div>
                Moj dex:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={playerDex}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setPlayerDex(e.target.value)}
                />
            </div>
            <div>
                Moj spost:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={playerSpost}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setPlayerSpost(e.target.value)}
                />
            </div>
            <div>
                Moja sila:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={str}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setStr(e.target.value)}
                />
            </div>
            <div>

                Moja inteligencja:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={int}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setInt(e.target.value)}
                />
            </div>
            <div>

                Moja wiedza:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={wis}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setWis(e.target.value)}
                />
            </div>
            <div>

                Odpornosc:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={def}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setDef(e.target.value)}
                />
            </div>
            <div>

                Moj wyglad:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={look}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setLook(e.target.value)}
                />
            </div>
            <div>

                Moja charyzma:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={char}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setChar(e.target.value)}
                />
            </div>
            <div>

                Moje wplywy:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={wpl}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setWpl(e.target.value)}
                />
            </div>
            <p>
                Rasa:
                <div>
                    <input onClick={() => setRace({luck: 10, hpMod: 0})} type="radio" value="LM" name="behe"/> Lapacz Mysli
                    <input onClick={() => setRace({luck: 0, hpMod: 0.2})} type="radio" value="WZ" name="behe"/> Wladca Zwierzat
                </div>
            </p>
            <p>

                <div>
                    <input onClick={() => setBeheMultiplier(0)} type="radio" value="Behemot lv 0" name="behe"/> Behe lv 0
                    <input onClick={() => setBeheMultiplier(0.25)} type="radio" value="Behemot lv 3" name="behe"/> Behe lv 3
                    <input onClick={() => setBeheMultiplier(0.4)} type="radio" value="Behemot lv 4" name="behe"/> Behe lv 4
                </div>

                <div>
                    <input onClick={() => setTalismanDex(0)} type="radio" value="Zwinka lv 0" name="zwinka"/> Zwinka lv 0
                    <input onClick={() => setTalismanDex(3)} type="radio" value="Zwinka lv 3" name="zwinka"/> Zwinka lv 3
                    <input onClick={() => setTalismanDex(4)} type="radio" value="Zwinka lv 4" name="zwinka"/> Zwinka lv 4
                </div>
                <div>
                    <input onClick={() => setTalismanSpost(0)} type="radio" value="Spost lv 0" name="Spost"/> Spost lv 0
                    <input onClick={() => setTalismanSpost(35)} type="radio" value="Spost lv 3" name="Spost"/> Spost lv 3
                    <input onClick={() => setTalismanSpost(50)} type="radio" value="Spost lv 4" name="Spost"/> Spost lv 4
                </div>
            </p>
            <p>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Palec 1:</label>
                    <select id="pref">
                        <option value={{}} onChange={() => {
                        }}>Tanczacy
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Msciwy
                        </option>
                    </select>
                    <select id="base">
                        <option value={{}} onChange={() => {
                        }}>Krawat
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Naszyjnik
                        </option>
                    </select>
                    <select id="suf">
                        <option value={{}} onChange={() => {
                        }}>gowna
                        </option>
                        <option value={{}} onChange={() => {
                        }}>dupy
                        </option>
                    </select>

                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Palec 2:</label>
                    <select id="q">
                        <option value={{}} onChange={() => {
                        }}>Tanczacy
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Msciwy
                        </option>
                    </select>
                    <select id="w">
                        <option value={{}} onChange={() => {
                        }}>Krawat
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Naszyjnik
                        </option>
                    </select>
                    <select id="e">
                        <option value={{}} onChange={() => {
                        }}>gowna
                        </option>
                        <option value={{}} onChange={() => {
                        }}>dupy
                        </option>
                    </select>

                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Szyja:</label>
                    <select id="r">
                        <option value={{}} onChange={() => {
                        }}>Tanczacy
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Msciwy
                        </option>
                    </select>
                    <select id="t">
                        <option value={{}} onChange={() => {
                        }}>Krawat
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Naszyjnik
                        </option>
                    </select>
                    <select id="y">
                        <option value={{}} onChange={() => {
                        }}>gowna
                        </option>
                        <option value={{}} onChange={() => {
                        }}>dupy
                        </option>
                    </select>

                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Bron 1:</label>
                    <select id="u" onChange={onChange}>
                        <option value={JSON.stringify({hpMod: 0, luck: 0})}>Bez broni</option>
                        <option value={JSON.stringify({hpMod: 0.49, luck: 12})}>Opiekunczy</option>
                        <option value={JSON.stringify({hpMod: 0.19, luck: 8})}>Msciwy</option>
                    </select>
                    <select id="i">
                        <option value={{}} onChange={() => {
                        }}>Waki
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Naszyjnik
                        </option>
                    </select>
                    <select id="o">
                        <option value={{}} onChange={() => {
                        }}>gowna
                        </option>
                        <option value={{}} onChange={() => {
                        }}>dupy
                        </option>
                    </select>
                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Bron 2:</label>
                    <select id="a">
                        <option value={{}} onChange={() => {
                        }}>Tanczacy
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Msciwy
                        </option>
                    </select>
                    <select id="s">
                        <option value={{}} onChange={() => {
                        }}>Krawat
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Naszyjnik
                        </option>
                    </select>
                    <select id="d">
                        <option value={{}} onChange={() => {
                        }}>gowna
                        </option>
                        <option value={{}} onChange={() => {
                        }}>dupy
                        </option>
                    </select>
                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Glowa:</label>

                    <select id="headSuf" onChange={onHeadPrefChange}>
                        {headPrefixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="headMain" onChange={onHeadMainChange}>
                        {headMainPart.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="headSuf" onChange={onHeadSufChange}>
                        {headSufixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}

                    </select>
                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Klata:</label>
                    <select id="j">
                        <option value={{}} onChange={() => {
                        }}>Tanczacy
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Msciwy
                        </option>
                    </select>
                    <select id="k">
                        <option value={{}} onChange={() => {
                        }}>Krawat
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Naszyjnik
                        </option>
                    </select>
                    <select id="l">
                        <option value={{}} onChange={() => {
                        }}>gowna
                        </option>
                        <option value={{}} onChange={() => {
                        }}>dupy
                        </option>
                    </select>
                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Nogi:</label>
                    <select id="z">
                        <option value={{}} onChange={() => {
                        }}>Tanczacy
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Msciwy
                        </option>
                    </select>
                    <select id="x">
                        <option value={{}} onChange={() => {
                        }}>Krawat
                        </option>
                        <option value={{}} onChange={() => {
                        }}>Naszyjnik
                        </option>
                    </select>
                    <select id="c">
                        <option value={{}} onChange={() => {
                        }}>gowna
                        </option>
                        <option value={{}} onChange={() => {
                        }}>dupy
                        </option>
                    </select>
                </div>
            </p>
            <hr/>
            <div style={{marginTop: 20}}>Suma gracza: {parseInt(playerDex) + parseInt(playerSpost)}</div>
            <div style={{marginTop: 20}}>Suma moba: {parseInt(bossDex) + parseInt(bossSpost)}</div>
            <hr/>
            <p>
                Boss:
            </p>
            <div>
                Max suma poziomow dla bossa:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={maxLevels}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setMaxLevels(e.target.value)}
                />
            </div>
            <div>
                Suma poziomow bioracych udzial:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={levels}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setLevels(e.target.value)}
                />
            </div>

            <div>

                Zwinka:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={bossDex}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setBossDex(e.target.value)}
                />
            </div>

            <div>

                Spostrzegawczosc:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={bossSpost}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setBossSpost(e.target.value)}
                />
            </div>

            <div>

                Dodatkowe Trafienie:
                <input
                    type="text"
                    style={{marginLeft: 10}}
                    placeholder="Type stat..."
                    value={additionalHit}
                    name="filterText"
                    onFocus={handleFocus}
                    onChange={(e) => setAdditionalHit(e.target.value)}
                />
            </div>


            <div style={{marginTop: 20}}>Trafienie zwinka: {dexHit ? dexHit : 0}%</div>
            <div style={{marginTop: 20}}>Trafienie suma: {sumaHit ? sumaHit : 0}%</div>
        </>
    )
}

export default Stat;
