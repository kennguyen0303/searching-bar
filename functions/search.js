const {db} = require('./admin')
exports.search = (req,res)=>{
    db.collection("users").where("name","==",req.params.name)
    .get().then(snapshot=>{
        if(snapshot){
         let names=[];
         snapshot.forEach(doc => {
             names.push(doc.data().name)
         });   
         return res.json(names)
        }
        res.send('cannot found');
        return;
    }).catch(err=>console.log(err.message));
}

exports.getAll = (req,res)=>{
    db.collection('users').get().then(
        snapshot=>{
            let names=[]
           snapshot.forEach(doc=>{
                names.push(doc.data().name)
           })
           return res.json(names)
        }
    ).catch(err=>console.log(err.message));
}