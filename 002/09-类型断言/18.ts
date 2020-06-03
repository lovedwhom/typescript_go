function getCacheData (key:string): any {
    return (window as any).cache[key]
}

interface Cat {
    name:string;
    run():void;
}

const tom:Cat = getCacheData('tom');
tom.run()