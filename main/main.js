module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxmum()}
o) 元素数量 = ${sequence.elemsCount()}
o) 平均值 = ${sequence.getAverage()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.value = input;
    this.sortedArr = this.value.sort(function(a,b){
  		return a - b;
  	})
  }

  minimum() {
  	
  	return this.sortedArr[0]
    // Write your code here
  }
  maxmum(){
  	return this.sortedArr[this.sortedArr.length - 1];
  }
  elemsCount(){
  	return this.value.length;

  }
  getAverage(){
  	var sum = this.value.reduce(function(a,b){return a + b});
  	return (sum / this.elemsCount()).toFixed(2);
  }
  // Write your code here
}
