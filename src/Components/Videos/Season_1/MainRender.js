import React,{useState} from 'react'

export default function MainRender() {
    const [update,setUpdate] = useState(null)
    const [input,setInput] = useState()
    //Drop down menu 
    // conditional rendering based on the menu

    const episodeHandler = (e) => {
        e.preventDefault();
        setUpdate(true)
        console.log(e.target.value)
        setInput(e.target.value)
    }

    if(update ===null){
    return (
        <div>
            <select id="Season-1" onChange={episodeHandler}>
                <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                    <option value="ep1">Episode 1</option>
                    <option value="ep2">Episode 2</option>
                    <option value = "ep3">Episode 3</option>
                    <option value="ep4">Episode 4</option>
                    <option value="ep5">Episode 5</option>
                    <option value="ep6">Episode 6</option>
                    <option value="ep7">Episode 7</option>
                    <option value="ep8">Episode 8</option>
                    <option value="ep9">Episode 9</option>
                    <option value="ep10">Episode 10</option>
                    <option value="ep11">Episode 11</option>
                    <option value="ep12">Episode 12</option>
                </optgroup>
            </select>
        </div>
    )
}else if(input === 'ep1'){
    return(
    <div>
    <select id="Season-1" onChange={episodeHandler}>
        <optgroup label="Season-1">
        <option>Choose An Episode</option>
            <option value="ep1">Episode 1</option>
            <option value="ep2">Episode 2</option>
            <option value = "ep3">Episode 3</option>
            <option value="ep4">Episode 4</option>
            <option value="ep5">Episode 5</option>
            <option value="ep6">Episode 6</option>
            <option value="ep7">Episode 7</option>
            <option value="ep8">Episode 8</option>
            <option value="ep9">Episode 9</option>
            <option value="ep10">Episode 10</option>
            <option value="ep11">Episode 11</option>
            <option value="ep12">Episode 12</option>
        </optgroup>
    </select>
    <h1>Episode 1</h1>
</div>

        )}else if(input ==='ep2'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 2</h1>
            </div>
            )

        }else if(input ==='ep3'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 3</h1>
            </div>
            )
        }else if(input ==='ep4'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 4</h1>
            </div>
            )
        }else if(input ==='ep5'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 5</h1>
            </div>
            )
        }else if(input ==='ep6'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 6</h1>
            </div>
            )
        }else if(input ==='ep7'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 7</h1>
            </div>
            )
        }else if(input ==='ep8'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 8</h1>
            </div>
            )
        }else if(input ==='ep9'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 9</h1>
            </div>
            )
        }else if(input ==='ep10'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 10</h1>
            </div>
            )
        }else if(input ==='ep11'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 11</h1>
            </div>
            )
        }else if(input ==='ep12'){
            return(
                <div>
                <select id="Season-1" onChange={episodeHandler}>
                    <optgroup label="Season-1">
                    <option>Choose An Episode</option>
                        <option value="ep1">Episode 1</option>
                        <option value="ep2">Episode 2</option>
                        <option value = "ep3">Episode 3</option>
                        <option value="ep4">Episode 4</option>
                        <option value="ep5">Episode 5</option>
                        <option value="ep6">Episode 6</option>
                        <option value="ep7">Episode 7</option>
                        <option value="ep8">Episode 8</option>
                        <option value="ep9">Episode 9</option>
                        <option value="ep10">Episode 10</option>
                        <option value="ep11">Episode 11</option>
                        <option value="ep12">Episode 12</option>
                    </optgroup>
                </select>
                <h1>Episode 12</h1>
            </div>
            )
        }else{
            return(
                <div>
                    How did you get here? You don't belong here
                </div>
            )
        }


}

