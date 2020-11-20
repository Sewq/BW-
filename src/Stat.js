import React, {useState, useEffect} from 'react';
import {headPrefixes, headSufixes, headMainPart} from './items/head'
import {ringMain, ringPostfixes, ringPrefixes} from './items/Rings'
import {neckMainBase, neckPrefixes, neckSufixes} from './items/Neck'
import {jewelerySets} from "./items/JewelerySet";
import {legSufixes, legMainBase, legPrefixes} from "./items/Legs";
import {armorsMainBase, armorsPrefixes, armorsSufixes} from "./items/Armor";
import {armorSets} from "./items/ArmorSet";

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
    const [finalStr, setFinalStr] = useState(0);
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


    const [firstRingPref, setfirstRingPref] = useState({luck: 0, hpMod: 0});
    const [firstRingMain, setFirstRingMain] = useState({luck: 0, hpMod: 0});
    const [firstRingSuf, setFirstRingSuf] = useState({luck: 0, hpMod: 0});

    const [secondRingPref, setSecondRingPref] = useState({luck: 0, hpMod: 0});
    const [secondRingMain, setSecondRingMain] = useState({luck: 0, hpMod: 0});
    const [secondRingSuf, setSecondRingSuf] = useState({luck: 0, hpMod: 0});

    const [neckPref, setNeckPref] = useState({luck: 0, hpMod: 0});
    const [neckMain, setNeckMain] = useState({luck: 0, hpMod: 0});
    const [neckSuf, setNeckSuf] = useState({luck: 0, hpMod: 0});


    const [headPref, setHeadPref] = useState({luck: 0, hpMod: 0, spost: 0, dex: 0});
    const [headSuf, setHeadSuf] = useState({luck: 0, hpMod: 0, spost: 0, dex: 0});
    const [headMain, setHeadMain] = useState({luck: 0, hpMod: 0, spost: 0, dex: 0});


    const [armorPref, setArmorPref] = useState({luck: 0, hpMod: 0});
    const [armorMain, setArmorMain] = useState({luck: 0, hpMod: 0});
    const [armorSuf, setArmorSuf] = useState({luck: 0, hpMod: 0});


    const [legsPref, setLegsPref] = useState({luck: 0, hpMod: 0});
    const [legsMain, setLegsMainBase] = useState({luck: 0, hpMod: 0});
    const [legsSuf, setLegsSuf] = useState({luck: 0, hpMod: 0});

    const handleFocus = (event) => event.target.select();

    const missingLevelsPercent = ((maxLevels - levels) / maxLevels);

    const additionalToHit = (parseInt(maxLevels) - parseInt(levels)) * missingLevelsPercent;

    const some = (70 + (3 * parseInt(bossDex)) + parseInt(additionalToHit));
    const dexHit = some - (3 * playerDex);

    const suma = (70 + (3 * (parseInt(bossDex) + parseInt(bossSpost))) + parseInt(additionalToHit));
    const sumaHit = suma - (3 * (parseInt(playerDex) + parseInt(playerSpost)));


    const setTalismanDex = (talismanLevel) => setDexFromTalisman(15 * talismanLevel);

    const setTalismanSpost = (spostFromTalisman) => setSpostFromTalisman(spostFromTalisman);

    const onChange = selectedOption => setFirstWeapon(JSON.parse(selectedOption.target.value));

    const onHeadPrefChange = selectedOption => setHeadPref(JSON.parse(selectedOption.target.value));
    const onHeadMainChange = selectedOption => setHeadMain(JSON.parse(selectedOption.target.value));
    const onHeadSufChange = selectedOption => setHeadSuf(JSON.parse(selectedOption.target.value));

    const onArmorPrefChange = selectedOption => setArmorPref(JSON.parse(selectedOption.target.value));
    const onArmorMainChange = selectedOption => setArmorMain(JSON.parse(selectedOption.target.value));
    const onArmorSufChange = selectedOption => setArmorSuf(JSON.parse(selectedOption.target.value));

    const onFirstRingPrefChange = selectedOption => setfirstRingPref(JSON.parse(selectedOption.target.value));
    const onFirstRingMainChange = selectedOption => setFirstRingMain(JSON.parse(selectedOption.target.value));
    const onFirstRingSufChange = selectedOption => setFirstRingSuf(JSON.parse(selectedOption.target.value));

    const onSecondRingPrefChange = selectedOption => setSecondRingPref(JSON.parse(selectedOption.target.value));
    const onSecondRingMainChange = selectedOption => setSecondRingMain(JSON.parse(selectedOption.target.value));
    const onSecondRingSufChange = selectedOption => setSecondRingSuf(JSON.parse(selectedOption.target.value));

    const onNeckPrefChange = selectedOption => setNeckPref(JSON.parse(selectedOption.target.value));
    const onNeckMainBaseChange = selectedOption => setNeckMain(JSON.parse(selectedOption.target.value));
    const onNeckSufChange = selectedOption => setNeckSuf(JSON.parse(selectedOption.target.value));

    const onLegsPrefChange = selectedOption => setLegsPref(JSON.parse(selectedOption.target.value));
    const onLegsMainBaseChange = selectedOption => setLegsMainBase(JSON.parse(selectedOption.target.value));
    const onLegsSufChange = selectedOption => setLegsSuf(JSON.parse(selectedOption.target.value));

    const numberOrZero = value => parseFloat(value) || 0;

    const dexFromHead = () => numberOrZero(headMain.dex) + numberOrZero(headPref.dex) + numberOrZero(headSuf.dex);
    const spostFromHead = () => numberOrZero(headMain.spost) + numberOrZero(headPref.spost) + numberOrZero(headSuf.spost);
    const strFromHead = () => numberOrZero(headMain.str) + numberOrZero(headPref.str) + numberOrZero(headSuf.str);
    const intFromHead = () => numberOrZero(headMain.int) + numberOrZero(headPref.int) + numberOrZero(headSuf.int);
    const wplFromHead = () => numberOrZero(headMain.wpl) + numberOrZero(headPref.wpl) + numberOrZero(headSuf.wpl);
    const lookFromHead = () => numberOrZero(headMain.look) + numberOrZero(headPref.look) + numberOrZero(headSuf.look);
    const luckFromHead = () => numberOrZero(headMain.luck) + numberOrZero(headPref.luck) + numberOrZero(headSuf.luck);

    const dexFromFirstRing = () => numberOrZero(firstRingPref.dex) + numberOrZero(firstRingMain.dex) + numberOrZero(firstRingSuf.dex);
    const spostFromFirstRing = () => numberOrZero(firstRingPref.spost) + numberOrZero(firstRingMain.spost) + numberOrZero(firstRingSuf.spost);
    const strFromFirstRing = () => numberOrZero(firstRingPref.str) + numberOrZero(firstRingMain.str) + numberOrZero(firstRingSuf.str);
    const intFromFirstRing = () => numberOrZero(firstRingPref.int) + numberOrZero(firstRingMain.int) + numberOrZero(firstRingSuf.int);
    const wplFromFirstRing = () => numberOrZero(firstRingPref.wpl) + numberOrZero(firstRingMain.wpl) + numberOrZero(firstRingSuf.wpl);
    const lookFromFirstRing = () => numberOrZero(firstRingPref.look) + numberOrZero(firstRingMain.look) + numberOrZero(firstRingSuf.look);
    const luckFromFirstRing = () => numberOrZero(firstRingPref.luck) + numberOrZero(firstRingMain.luck) + numberOrZero(firstRingSuf.luck);
    const hpModFromFirstRing = () => numberOrZero(firstRingPref.hpMod) + numberOrZero(firstRingMain.hpMod) + numberOrZero(firstRingSuf.hpMod);

    const dexFromSecondRing = () => numberOrZero(secondRingPref.dex) + numberOrZero(secondRingMain.dex) + numberOrZero(secondRingSuf.dex);
    const spostFromSecondRing = () => numberOrZero(secondRingPref.spost) + numberOrZero(secondRingMain.spost) + numberOrZero(secondRingSuf.spost);
    const strFromSecondRing = () => numberOrZero(secondRingPref.str) + numberOrZero(secondRingMain.str) + numberOrZero(secondRingSuf.str);
    const intFromSecondRing = () => numberOrZero(secondRingPref.int) + numberOrZero(secondRingMain.int) + numberOrZero(secondRingSuf.int);
    const wplFromSecondRing = () => numberOrZero(secondRingPref.wpl) + numberOrZero(secondRingMain.wpl) + numberOrZero(secondRingSuf.wpl);
    const lookFromSecondRing = () => numberOrZero(secondRingPref.look) + numberOrZero(secondRingMain.look) + numberOrZero(secondRingSuf.look);
    const luckFromSecondRing = () => numberOrZero(secondRingPref.luck) + numberOrZero(secondRingMain.luck) + numberOrZero(secondRingSuf.luck);
    const hpModFromSecondRing = () => numberOrZero(secondRingPref.hpMod) + numberOrZero(secondRingMain.hpMod) + numberOrZero(secondRingSuf.hpMod);

    const dexFromNeck = () => numberOrZero(neckPref.dex) + numberOrZero(neckMain.dex) + numberOrZero(neckSuf.dex);
    const spostFromNeck = () => numberOrZero(neckPref.spost) + numberOrZero(neckMain.spost) + numberOrZero(neckSuf.spost);
    const strFromNeck = () => numberOrZero(neckPref.str) + numberOrZero(neckMain.str) + numberOrZero(neckSuf.str);
    const intFromNeck = () => numberOrZero(neckPref.int) + numberOrZero(neckMain.int) + numberOrZero(neckSuf.int);
    const wplFromNeck = () => numberOrZero(neckPref.wpl) + numberOrZero(neckMain.wpl) + numberOrZero(neckSuf.wpl);
    const lookFromNeck = () => numberOrZero(neckSuf.look) + numberOrZero(neckMain.look) + numberOrZero(neckSuf.look);
    const luckFromNeck = () => numberOrZero(neckSuf.luck) + numberOrZero(neckMain.luck) + numberOrZero(neckSuf.luck);
    const hpModFromNeck = () => numberOrZero(neckSuf.hpMod) + numberOrZero(neckMain.hpMod) + numberOrZero(neckSuf.hpMod);


    const dexFromLegs = () => numberOrZero(legsPref.dex) + numberOrZero(legsMain.dex) + numberOrZero(legsSuf.dex);
    const spostFromLegs = () => numberOrZero(legsPref.spost) + numberOrZero(legsMain.spost) + numberOrZero(legsSuf.spost);
    const strFromLegs = () => numberOrZero(legsPref.str) + numberOrZero(legsMain.str) + numberOrZero(legsSuf.str);
    const intFromLegs = () => numberOrZero(legsPref.int) + numberOrZero(legsMain.int) + numberOrZero(legsSuf.int);
    const wplFromLegs = () => numberOrZero(legsPref.wpl) + numberOrZero(legsMain.wpl) + numberOrZero(legsSuf.wpl);
    const lookFromLegs = () => numberOrZero(legsPref.look) + numberOrZero(legsMain.look) + numberOrZero(legsSuf.look);
    const luckFromLegs = () => numberOrZero(legsPref.luck) + numberOrZero(legsMain.luck) + numberOrZero(legsSuf.luck);


    const dexFromArmor = () => numberOrZero(armorPref.dex) + numberOrZero(armorMain.dex) + numberOrZero(armorSuf.dex);
    const spostFromArmor = () => numberOrZero(armorPref.spost) + numberOrZero(armorMain.spost) + numberOrZero(armorSuf.spost);
    const strFromArmor = () => numberOrZero(armorPref.str) + numberOrZero(armorMain.str) + numberOrZero(armorSuf.str);
    const intFromArmor = () => numberOrZero(armorPref.int) + numberOrZero(armorMain.int) + numberOrZero(armorSuf.int);
    const wplFromArmor = () => numberOrZero(armorPref.wpl) + numberOrZero(armorMain.wpl) + numberOrZero(armorSuf.wpl);
    const lookFromArmor = () => numberOrZero(armorPref.look) + numberOrZero(armorMain.look) + numberOrZero(armorSuf.look);
    const luckFromArmor = () => numberOrZero(armorPref.luck) + numberOrZero(armorMain.luck) + numberOrZero(armorSuf.luck);
    const hpModFromArmor = () => numberOrZero(armorPref.hpMod) + numberOrZero(armorMain.hpMod) + numberOrZero(armorSuf.hpMod);


    const jewelerySetBonusStr = () => {
        if (neckPref.id && neckPref.id === firstRingPref.id && neckPref.id === secondRingPref.id) {
            return numberOrZero(jewelerySets[neckPref.id].str);
        }
        return 0;
    };

    const jewelerySetBonusHpMod = () => {
        if (neckPref.id && neckPref.id === firstRingPref.id && neckPref.id === secondRingPref.id) {
            return numberOrZero(jewelerySets[neckPref.id].hpMod);
        }
        return 0;
    };

    const jewelerySetBonusSpost = () => {
        if (neckPref.id && neckPref.id === firstRingPref.id && neckPref.id === secondRingPref.id) {
            return numberOrZero(jewelerySets[neckPref.id].spost);
        }
        return 0;
    };

    const armorSetBonusStr = () => {
        if (legsPref.id && legsPref.id === headPref.id && legsPref.id === armorPref.id) {
            return numberOrZero(armorSets[legsPref.id].str);
        }
        return 0;
    };

    const armorSetBonusLuck = () => {
        if (legsPref.id && legsPref.id === headPref.id && legsPref.id === armorPref.id) {
            return numberOrZero(armorSets[legsPref.id].luck);
        }
        return 0;
    };

    const hpWithMod = (hp, mod) => numberOrZero(hp) * mod;

    const finalStrength = () => numberOrZero(str) + strFromHead() + strFromFirstRing() + strFromSecondRing() + strFromNeck() + strFromLegs() + strFromArmor() + jewelerySetBonusStr() + armorSetBonusStr();
    const finalInt = () => numberOrZero(int) + intFromHead() + intFromFirstRing() + intFromSecondRing() + intFromNeck() + intFromArmor() + intFromLegs();
    const finalWpl = () => numberOrZero(wis) + wplFromHead() + wplFromFirstRing() + wplFromSecondRing() + wplFromNeck() + wplFromArmor() + wplFromLegs();
    const finalLook = () => numberOrZero(look) + lookFromHead() + lookFromFirstRing() + lookFromSecondRing() + lookFromNeck() + lookFromLegs() + lookFromArmor();
    const finalLuck = () => numberOrZero(luck) + race.luck + armorSetBonusLuck() + luckFromArmor() + luckFromFirstRing() + luckFromSecondRing() + luckFromHead() + luckFromLegs() + luckFromNeck();
    const finalHp = () => Math.ceil(parseInt(baseHp) + (parseInt(baseHp) * race.hpMod) + hpWithMod(baseHp, hpModFromFirstRing()) + hpWithMod(baseHp, hpModFromSecondRing()) + hpWithMod(baseHp, hpModFromNeck()) + hpWithMod(baseHp, hpModFromArmor()) + hpWithMod(baseHp, jewelerySetBonusHpMod()));

    const dexFromBehe = (parseInt(finalStrength()) * beheMultiplier);
    const spostFromBehe = (parseInt(int) + parseInt(wis)) * beheMultiplier;


    return (
        <>
            <p>
                final
                dex bez
                evo: {numberOrZero(playerDex) + numberOrZero(dexFromBehe) + numberOrZero(dexFromTalisman) + dexFromHead() + dexFromFirstRing() + dexFromSecondRing() + dexFromNeck() + dexFromLegs() + dexFromArmor()}
            </p>
            <p>
                final
                spost bez
                evo: {parseInt(playerSpost) + parseInt(spostFromBehe) + parseInt(spostFromTalisman) + spostFromHead() + spostFromFirstRing() + spostFromSecondRing() + spostFromNeck() + spostFromLegs() + spostFromArmor() + jewelerySetBonusSpost()}
            </p>
            <p>
                final
                sila bez evo: {finalStrength()}
            </p>
            <p>
                final
                int bez evo: {finalInt()}
            </p>
            <p>
                final
                wplywy bez evo: {finalWpl()}
            </p>
            <p>
                final
                wyglad bez evo: {finalLook()}
            </p>
            <p>

                final hp: {finalHp()}
            </p>
            <p>

                final luck bez evo: {finalLuck()}
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
                    <select id="pref" onChange={onFirstRingPrefChange}>
                        {ringPrefixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="base" onChange={onFirstRingMainChange}>
                        {ringMain.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="suf" onChange={onFirstRingSufChange}>
                        {ringPostfixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Palec 2:</label>
                    <select id="pref" onChange={onSecondRingPrefChange}>
                        {ringPrefixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="base" onChange={onSecondRingMainChange}>
                        {ringMain.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="suf" onChange={onSecondRingSufChange}>
                        {ringPostfixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Szyja:</label>
                    <select id="pref" onChange={onNeckPrefChange}>
                        {neckPrefixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="base" onChange={onNeckMainBaseChange}>
                        {neckMainBase.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="suf" onChange={onNeckSufChange}>
                        {neckSufixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
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
                    <select id="headSuf" onChange={onArmorPrefChange}>
                        {armorsPrefixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="headMain" onChange={onArmorMainChange}>
                        {armorsMainBase.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="headSuf" onChange={onArmorSufChange}>
                        {armorsSufixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}

                    </select>
                </div>
                <div>
                    <label style={{paddingRight: 20}} htmlFor="pref">Nogi:</label>
                    <select id="headSuf" onChange={onLegsPrefChange}>
                        {legPrefixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="headMain" onChange={onLegsMainBaseChange}>
                        {legMainBase.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
                    </select>
                    <select id="headSuf" onChange={onLegsSufChange}>
                        {legSufixes.map((option) => (
                            <option key={option.name} value={JSON.stringify(option)}>{option.name}</option>
                        ))}
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
