import Box from './component/Box'
import { useState } from 'react';
import './App.css';

const choice={
  rock:{
    name:'Rock',
    img:'data:image/jpeg;base64,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'
  },
  scissor:{
    name:'scissor',
    img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHEhUSBxMVERUXFhoYFhIYFRgYFRgaGhcWFxkdHRYZHSgiGhonHRcVITEhJSkrMC8uFx8zODMtNygtLisBCgoKDg0OFxAQFSsaFR0rKystLSsrKy0rLSsrNzctLTctKysrKzcrLTcrLSsrLSs3LSstKystKysrLSs3KysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcIAgH/xABGEAACAQMBBAYGBQkGBwEAAAAAAQIDBBEFBhIhMQdBUWFxkRMyUoGh0TNCcpKxFCIjNGKCssHCJENTg5OiFiU1VGPS4RX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAaEQEBAQADAQAAAAAAAAAAAAAAEQECEiEx/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/G1Hi+BXdR262a054rXMZPspp1PjBNLzAsYKdS6Tdl5vEqs497pTx8EyxaXrOm6um9MrQq45qMk2vGPNe9Ab4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFbS6/Y7OUXWv33RgvWnLsS/n1ElVqQoxcqrUYpNtvkkuLZ5x252mq7SXEqsm1TjmNKPswzzx7UsZfuXUgN/WNpdo9uK3oLOMpJ8Y21PhBJdc5PGea/OlwzyxnBYdJ6Hbyut7W7pU2/7ujHea/zJ4Wf3X4su/Rvs5R2es6fD9LViqlafW5SWVHPZFPdXg3zbLUBy246F7Ddf5Fd14y6nONOcfKKi/iULXdB1/YirGVy3FZ/R3NKT3W+Lxng4ywuMX34yk2ejyO2i0qhrdtVt7pJqcGk/ZlzjJd6eH7gKv0cbcf8AEUfQajhXEVnKwlViubS6pLrS8V1pXk8r6BqlbTalG4teEoOM139qfc02n3NnqO0uKd3CFSi8xnFSi+6STXwYGUAAAAAAI/UrW8rcbWo4/scvKS4+YEgCn3FW/tnitKpF/afz4n7S1a+p8pt+KT/Ez2WLeCvUdoaq+mgn4PH45N6jrdnU9duHiv5rJbiRJgx0q1KtxpSUvB5MhQAAAAAAAAAAAA1L+7VsvzfWfL5gU7pd1x6fZSpUH+dWkqbfZH1peaW7+8cIklNNPrOi9L9WpL8mUs4/Sv3/AKP/AOnOgPSuxOvW20FpTqUGt6MVGrDrhNJJprsfNdqaJ48uaPrF/o0/SaZVlRnybjjDXZKLypLuaZdrfpe1yksXFO3m/a3ZxfvSljywB20rHSDtLQ2dtZ/nL01SLhRh9ZyaxvY9mOct+C5tHLL/AKVto7tNUJ0qHfTp5l51HJfAp99f3N9N1Lycqs3znOTlLwy+ruAwRShhLqPSuw29/wDnWe9/21Ly9HHHwweb7C1qX9WnRoetUnGEfGUlFfiep7W3p2sI06PCMIqMV3RSS+CAygAAAAAAA+alOFVYqpSXY1lEReaBSqcbV7j7Hxj80TIJuUUm7sbqz+ni8e0uK8/ma6ki/NZ5kXe6HaXPGmvRvtjy+78sGd4rVXU2uMeD7es3LfV72j9fK7Jcfjz+J+XejXtrxS312x5/d5mgptczPuKsVvtHF/rMPfF5+D+ZJ22pWdz9FNZ7HwfkylKUZdx+SRrOWpHQQUW31G7tfoZtLs5ryZK2u07XC7hn9qP/AKv5lzlhFlBpWmqWV3wozWfZfCXk+fuN00gAYLq6pWyzUfHqXWwP27uIW0cy9y7Sr1rudaTcmZL+8ncvM/LsMFja1buWKfDtfUkQV/bXQq+0VBRslvVYPfpx9rhiUe7K+KRzW22Q2ouXu0bKvn9qHo196piPxPSdnZ0bNYpLxl1s2CjjOh9Dt/XxLXa8aK/w6S35/wCpJbsX7pF50vo32U05fq0az65Vm6jf7svzV7ki2gCEvNkNm72O5Xs6GO1UoxkvCUUmn3plQtuhvR4VHK4r1p097MaS3Y4XZKeG5eK3WdKAEJouyWgaI1LTbenCS5VGt6p/qTzL4k2AAAAAAAAAAB81JwprNRpLtbwjSnrFkvopOp9iMprzisL3sDfBFy1S5l9Bby8ZyjFfByfwMMrrWanqKjT8VOb/ABiSiaNS8020vPporPtLhLzXP3kc6OqVPpLiS+xThH4yUjHLS5z+nq1peNWSXlHCFGC92dq08u2kpLslwfnyfwIGvJW7xWai1zy0T89C0l8atOnJ9snvPzk2ZI2Ol0vUhTXhFfyRmLVVV3QlwjJN9ieX8D633L1IzfhCXyLXvWsfV+CMdSvS+pEdSoC2tZ3HrpxXbJY+HMmLOtc2fClUlJey+K83yXkfLlvGjd3cbecVU4J8njKzx6uvnkm+L9TVbV7qXq7q74tP+bwRlWtUlxk895E2+o16z3bhqUo8FiOM5ik8deHLOE22lE/dUvI0FmT9y5t9SS7S5tTcSdtbVr6W7Rfi+pIttlaU7OKjS9762zmljK8z6SUpQk+UYyaUV2cOfiTVDXNTocp767JJP48/iM5EXkFKv9vYaVTdS/pZxwSjLDk3yST+ZRKnS5tFKe9CFtGOeEHCbwuxy31l9+F4G0dwBzXRel3TrjC1ilOg/bh+kh5JKS8EmXvSta0vV1nTK1Or2qMk5LxjzXvQG+AAAAAAAAAAMVxOrBfoY777MpL3vs8EzTnC+q/Sy3V7NOP4zllvxSRIgCHnZ0ovMqUpv2pLfl96byfk7i4j6lCo/HH8skyCQqvTvdR+rRkv3JMxSu9TfOE1/lv5FmAi1VZVr+XrRqfdl8j5l6d+tGf3ZfItgERUUqvsT+7L5H0oV+qnU+5L5FsAgqqo3MuVOf3GvxR9qzvJcqcvgvxZZwIK2tNvn9TH7y+Z83Gz9a7WLhQa72/xS4MswEFDr7M39k/7BRjP9v03H/fx8jDT2X1SpLfvILK9WKlFqK8+fedCBOuLVAqWNa1+mhKPe08eZilHsOhtJ8yLv9DtbpP0X6OXauXvXyHUrh3SFdOVSnSXJRc2u9txX8L8yP2O2P1HbGpKNpJUacMekrSi5JN5wlHK3pcM4ysLm1lZ3ekyxuLC8UblYbpRw+prenxTOldCUKUdObp4y69Tf8cQS/2qJcRCV+hSmo/2S9mp9sqSlHyUk15sqeu9H+1Gg/nxp/lMI8VUoZlNd7hhTT+yn4noYFHmew211+x4W93WWHjdlNzSx1btTOPAnLXpT2no+vUp1Pt0o/0bp2PW9ldB13/qtvTqPlv43an+pHEl5lZrdEOy1T6JV6fdGq3/ABqTArFv0xapH9ZoUZ/Zc4fi5ExYdMVjU/X7adPvhONT+JQNuHQ7s1HnO5fjUj/KBr3/AENaNVX/AC+vXpS6t5wqQ98d1N+6SAt+hbXaHrz3dOrRc/8AClmFTvxGXreKyTh5k2j0HVNkq6pahz9alVg3uzSfOL4NSXDK5p46sN9q6MNpq20Vq1eveq0WoTl1yTWYSfe+KffFvrAuIAAAAAAAAAAAAAAAAAAAAAAAAAA5/wBMOzVbWLaNxYxcqlvluKWXKnLG/hdbWFLwUscWUDow2yp7NVZQvs/k9Vpya4+jmuCnhcWmsJ9fBY5Yffzmu2vRZQ1OUq+zzjQqvLlSfClN9bWPUk/Bp9i4sDotrc0LyEalrKNSElmM4tOLXamuZlPN9O42r2EqPeVa148creoTfxpyfeuK7i6aL0xy4LWrdS/8lGWG/wDLm/6/cB1wFPsukzZW69atKk+ydOa/3JOPxJFbbbLPne2y+1VhF+TaAnwV2rtzstSWXeUZfZlv/wAGSt650uaRbRa0aE7ifVKSdOmvHeW8/BR49qA1unirb/k1tB49J6dyiuvcVOan7t6VP347DT6BqNXN3P6uKUV3yXpW/JSXmUOpPXdubr81O4rSwuCxTpx447qdNcefN9rfHvexuztHZi1jQpNSl61SeMb9R4y8dmEku6KAnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHzOEKiaqJNPmmsp+4rGqdHmyupvNW2jTl7VJypfCDUX70y0gDmlz0N6PJ5tbi4h3N05L+FP4mpLoYp/UvZLxop/wBZ1YAcsp9DNr/fXlV/Zpxj+LZLWHRJszbY/KvTXH26m6vKko+RfQBq6bptjpUPR6bShRh7MIqK8Xjm+82gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k='
  },
  paper:{
    name:'paper',
    img:'data:image/jpeg;base64,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'
  }
}
function App() {
  const [userselect,setUserSelect]=useState(null)
  const [computerselect,setComputerSelcet]=useState(null)
  const [result,setResult]=useState('')
  
  const play=(choice1)=>{
    setUserSelect(choice[choice1])
    let randomchoice = random()
    setComputerSelcet(randomchoice)
    setResult(jugement(choice[choice1],randomchoice)) 
  }

  const random=()=>{
    let comArray = Object.keys(choice)
    let num=Math.floor(Math.random()*comArray.length)
    let comchoice = comArray[num]
    return choice[comchoice]
  }

  const jugement=(user,computer)=>{
    if(user.name==computer.name){
      return 'draw'
    }else if(user.name=='Rock'){
      if(computer.name=='scissor'){
        return 'Win'
      }else{
        return 'Lose'
      }
    }
    else if(user.name=='scissor')return computer.name=='paper'?'Win':'Lose'
    else if(user.name=='paper')return computer.name=='Rock'?'Win':'Lose'
  }

  return (
    <div>
      <div className='main'>
        <Box name='you' item={userselect} result={result}/>

        <Box name='computer' item={computerselect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={()=>play('scissor')}>??????</button>
        <button onClick={()=>play('rock')}>??????</button>
        <button onClick={()=>play('paper')}>???</button>
      </div>
    </div>
  );
}

export default App;
