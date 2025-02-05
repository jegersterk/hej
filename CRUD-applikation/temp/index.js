const p = new Promise(function a(res, rej){
	const a = true;
	if(a){

		res("yes");
	}else{

		rej("no");
	}
	
});
p
.then(anything => console.log(anything))
.catch(errr => console.log(errr))


// basically promise syntax:
const statement = null;
function callbackFun(callback,errorCallback){
	if(statement){
		callback({
			state: 'true stuff'
		})
	}else{
		errorCallback({
			state: 'it is false'
		})
	}
}

callbackFun(something => {console.log(something.state)},something => {console.log(something.state)})


// async vs .then
function setTimeoutPromise(delay){
	const p = new Promise((res, rej) => {
		if(delay >= 1000){
			rej('1 second takes too long');
		}
		setTimeout(() => {res(`fast enough! (${delay} ms)`)}, delay)
		
	})
	return p;
}

// .then
setTimeoutPromise(1000)
.then(message => console.log(message))
.catch((message) => console.log("fail,",message));

// async