class Developer {
    constructor(name){
        this.name =  name
    }

    startWork(){
        return `${this.name} start work`
    }

    endWork(){
        return `${this.name} end work`
    }
}

class FrontEnd extends Developer{
    constructor(name, webSiteName){
        super(name)
        this.webSiteName = webSiteName;
    }

    buildWebSite(){
        return `${this.name} start build website ${this.webSiteName}`;
    }
}

class BackEnd extends Developer{
    constructor(name){
        super(name)
    }

    buildServer(){
        return `${this.name} start build server`;
    }
}

const john = new FrontEnd('john', 'Wb');
console.log(john.startWork());     
console.log(john.buildWebSite()); 
console.log(john.endWork());

const kirill = new BackEnd('Kirill');
console.log(kirill.startWork()); 
console.log(kirill.buildServer());
console.log(kirill.endWork());