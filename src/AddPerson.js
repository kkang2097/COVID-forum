import { useHistory } from 'react-router-dom';
import { useState } from 'react'
import { Call } from './Call.js'
import { useDataLayerValue } from "./DataLayer";
import "./css/login.css"



export default function AddingPerson(props) {

    const history = useHistory();
    const [name, setName] = useState("name")
    const [age, setAge] = useState("age")
    const [sex, setSex] = useState("sex")
    const [stateavvrb, setStateavvrb] = useState("stateavvrb")
    const [vaccine, setVaccine] = useState("vaccine")
    const [race, setRace] = useState("race")
    const [smoke, setSmoker] = useState("smoker")
    const [heightFeet, setHeightFeet] = useState("heightFeet")
    const [heightInches, setHeightInches] = useState("heightInches")
    const [heartLung, setHeartLung] = useState("heartLung")
    const [mask, setMask] = useState("mask")
    const token = window.localStorage.getItem("Token")


    // CHRISTOPHERS CODE
    const [{ numPersons }, dispatch] = useDataLayerValue();

    const attemptLogin = (event) => {
        event.preventDefault();
        var data = { "token": token, "name": name, "age": age, "sex": sex, "state": stateavvrb, "vaccine": vaccine, "race": race, "smoker": smoke, "heightFeet": heightFeet, "heightInches": heightInches, "heartLung": heartLung, "mask": mask };
        console.log(data)
        var json = Call("addPerson", data)
            .then((response => {

                dispatch(response);
                if (response.error == false) {
                    console.log("add person successful")
                    history.push("/coviddashboard");
                }
                else {
                    console.log(response.error)
                }
            }))

        // END CHRISTOPHER CODE

        history.push("/coviddashboard");
    }

    const changeName = (event) => {
        setName(event.target.value)
    }
    const changeAge = (event) => {
        setAge(event.target.value)
    }
    const changestateavvrb = (event) => {
        setStateavvrb(event.target.value)
    }
    const changevaccine = (event) => {
        setVaccine(event.target.value)
    }
    const changeRace = (event) => {
        setRace(event.target.value)
    }
    const changesmoke = (event) => {
        setSmoker(event.target.value)
    }
    const changeheightfeet = (event) => {
        setHeightFeet(event.target.value)
    }
    const changeheightin = (event) => {
        setHeightInches(event.target.value)
    }
    const changeheart = (event) => {
        setHeartLung(event.target.value)
    }
    const changemask = (event) => {
        setMask(event.target.value)
    }

    if (numPersons > 2) {
        return null
    }
    else {
        return (
            <form className="basic-form" method="post">

                <div className="txt_field">
                    <label>Persons Name</label>
                    <input type="text" name="Name" onChange={changeName} />
                </div>


                <div className="txt_field">
                    <label>Age</label>
                    <select name="Age" onChange={changeAge}>
                        <option disabled selected value> -- select -- </option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="35">35</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="58">58</option>
                        <option value="59">59</option>
                        <option value="60">60</option>
                        <option value="61">61</option>
                        <option value="62">62</option>
                        <option value="63">63</option>
                        <option value="64">64</option>
                        <option value="65">65</option>
                        <option value="66">66</option>
                        <option value="67">67</option>
                        <option value="68">68</option>
                        <option value="69">69</option>
                        <option value="70">70</option>
                        <option value="71">71</option>
                        <option value="72">72</option>
                        <option value="73">73</option>
                        <option value="74">74</option>
                        <option value="75">75</option>
                        <option value="76">76</option>
                        <option value="77">77</option>
                        <option value="78">78</option>
                        <option value="79">79</option>
                        <option value="80">80</option>
                        <option value="81">81</option>
                        <option value="82">82</option>
                        <option value="83">83</option>
                        <option value="84">84</option>
                        <option value="85">85</option>
                        <option value="86">86</option>
                        <option value="87">87</option>
                        <option value="88">88</option>
                        <option value="89">89</option>
                        <option value="90">90</option>
                        <option value="91">91</option>
                        <option value="92">92</option>
                        <option value="93">93</option>
                        <option value="94">94</option>
                        <option value="95">95</option>
                        <option value="96">96</option>
                        <option value="97">97</option>
                        <option value="98">98</option>
                        <option value="99">99</option>
                    </select>
                </div>


                <div className="txt_field">
                    <label>State</label>
                    <select name="State" onChange={changestateavvrb}>
                        <option disabled selected value> -- select -- </option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>

                <div className="txt_field">
                    <label>Height In Feet</label>
                    <select name="HF" onChange={changeheightfeet}>
                        <option disabled selected value> -- select -- </option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                    </select>
                </div>


                <div className="txt_field">
                    <label>Height In Inches</label>
                    <select name="HI" onChange={changeheightin}>
                        <option disabled selected value> -- select -- </option>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                    </select>
                </div>


                <div className="txt_field">
                    <label>Vaccine Status</label>
                    <select name="Vaccine" id="Vaccine" onChange={changevaccine} >
                        <option disabled selected value> -- select -- </option>
                        <option value="2">Fully Vaxxed</option>
                        <option value="1">Initial Dose</option>
                        <option value="0">No Vax</option>
                    </select>
                </div>


                <div className="txt_field">
                    <label>Smoker Status</label>
                    <select name="Smoke" id="Smoke" onChange={changesmoke} >
                        <option disabled selected value> -- select -- </option>
                        <option value="0">NO</option>
                        <option value="1">YES</option>
                    </select>
                </div>

                <div className="txt_field">
                    <label>Race</label>
                    <select name="Race" id="Race" onChange={changeRace} >
                        <option disabled selected value> -- select -- </option>
                        <option value="1">White</option>
                        <option value="0">Black</option>
                        <option value="2">Latino</option>
                        <option value="3">Native American</option>
                        <option value="4">Asian</option>
                    </select>
                </div>

                <div className="txt_field">
                    <label>Disease Status</label>
                    <select name="Disease" id="Disease" onChange={changeheart} >
                        <option disabled selected value> -- select -- </option>
                        <option value="0">No Heart/Lung Disease</option>
                        <option value="1">Diagnosed Heart/Lung Disease</option>
                    </select>
                </div>

                <div className="txt_field">
                    <label>Mask Status</label>
                    <select name="Mask" id="Mask" onChange={changemask} >
                        <option disabled selected value> -- select -- </option>
                        <option value="1">Never Wear Mask</option>
                        <option value="2">Rarely Wear Mask</option>
                        <option value="3">Sometimes Wear Mask</option>
                        <option value="4">Usually Wear Mask</option>
                        <option value="5">Always Wear Mask</option>
                    </select>
                </div>

                <input type="submit" value="Add Person" className="submit-button" onClick={attemptLogin} />
            </form>

        )
    }
}
