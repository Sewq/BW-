import React, {useState} from 'react';

function Stat() {

    const [playerDex, setPlayerDex] = useState(0);
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


    const handleFocus = (event) => event.target.select();

    const missingLevelsPercent = ((maxLevels - levels) / maxLevels);

    const additionalToHit = (parseInt(maxLevels) - parseInt(levels)) * missingLevelsPercent;

    const some = (70 + (3 * parseInt(bossDex)) + parseInt(additionalToHit));
    const dexHit = some - (3 * playerDex);

    const suma = (70 + (3 * (parseInt(bossDex) + parseInt(bossSpost))) + parseInt(additionalToHit));
    const sumaHit = suma - (3 * (parseInt(playerDex) + parseInt(playerSpost)));

    function behe(e, multiplier) {

        setbeheDex(dexFromBehe);
        setbeheSpost(spostFromBehe);
        setFinalDex(parseInt(playerDex) + parseInt(beheDex));
        setFinalSpost(parseInt(playerSpost) + parseInt(beheSpost));
    }

    const dexFromBehe = (parseInt(str) * beheMultiplier);
    const spostFromBehe = (parseInt(int) + parseInt(wis)) * beheMultiplier;


    const setTalismanDex = (talismanLevel) => setDexFromTalisman(15 * talismanLevel);

    const setTalismanSpost = (spostFromTalisman) => setSpostFromTalisman(spostFromTalisman);


    return (
        <>
            <p>

                final dex: {parseInt(playerDex) + parseInt(dexFromBehe) + parseInt(dexFromTalisman)}
            </p>
            <p>

                final spost: {parseInt(playerSpost) + parseInt(spostFromBehe) + parseInt(spostFromTalisman)}
            </p>
            <p>

                final hp: {Math.ceil(parseInt(baseHp) + (parseInt(baseHp) * race.hpMod))}
            </p>
            <p>

                final luck: {parseInt(luck) + race.luck}
            </p>

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
