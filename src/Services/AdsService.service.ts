import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export class Ad{
    
    title: string;
    owner: string;
    contact_num: number;
    price: number;
    area: string;
    img: string;
    category: string; 
    postedBy: string;
    validity: boolean;
    
    constructor(pb:string,t:string, o: string, cn: number, p:number, a:string, i:string, c:string){
        this.validity= true;
        this.postedBy= pb;
        this.title= t;
        this.owner=o;
        this.contact_num= cn;
        this.price=p;
        this.area=a;
        this.img=i;
        this.category=c;
    }
}

export class Vehicle extends Ad{
    brand: string;
    model: number;
    kms_driven: number;
    features: string;
    
    constructor(pb:string, t:string, o: string, cn: number, p:number, a:string, i:string, c:string, b:string, m:number, kms:number,f:string){
        super(pb,t,o,cn,p,a,i,c);
        this.brand=b;
        this.model=m;   
        this.kms_driven=kms;
        this.features=f;    
    } 
}  

export class HomeAppliance extends Ad{
     type: string;
    condition_details: string;
    
    constructor(pb:string, t:string, o: string, cn: number, p:number, a:string, i:string, c:string, ty:string, cd:string){
        super(pb,t,o,cn,p,a,i,c);
        this.type=ty;
        this.condition_details=cd;
    }
}

export class MobTab extends Ad{
    brand: string;
    warrenty: string;
    accessories: string;
    details: string;
    
    constructor(pb:string, t:string, o: string, cn: number, p:number, a:string, i:string, c:string, b:string, w:string, ac:string, d:string){
        super(pb,t,o,cn,p,a,i,c);
        this.brand=b;
        this.warrenty=w;
        this.accessories=ac;
        this.details=d;    
    }
}

@Injectable()
export class AdsService{

    item_v: FirebaseListObservable<any[]>;
    item_mt: FirebaseListObservable<any[]>;
    item_ha: FirebaseListObservable<any[]>;

    veh_ad_arr: Vehicle[] =[
            new Vehicle(localStorage.getItem("current_email"),"Vitz 2006 for Sale!","QMZ",3475929,8000000,"Karachi","assets/img/c4.PNG","Vehicle","Vitz",2006,90000,"In new Condition!"),
            new Vehicle(localStorage.getItem("current_email"),"Silver Toyota 2003","Amjad",13278291,650000,"Lahore","assets/img/c1.PNG","Vehicle","Toyota",2004,800000,"Excellent Working Condition! Only serious buyers contact please."),
            new Vehicle(localStorage.getItem("current_email"),"Civic 2013 Brand New Condition","Mahtab",37892611,1050000,"Faislabad","assets/img/c2.PNG","Vehicle","Honda",2013,50000,"Brand new condition. Price is negotiable."),
            new Vehicle(localStorage.getItem("current_email"),"Classic Red Nissan ","Raheel",13278291,650000,"Lahore","assets/img/c3.PNG","Vehicle","Toyota",2004,800000,"Urgent for sale. Only serious buyers contact please."),
            new Vehicle(localStorage.getItem("current_email"),"Cab 10-Seater","Arslan",13278291,650000,"Karachi","assets/img/c5.PNG","Vehicle","Toyota",2004,800000,"Excellent Condition! Urgent for sale. Only serious buyers contact please. ")
            ];  

    mt_ad_arr: MobTab[]=[
      new MobTab(localStorage.getItem("current_email"),"Samsung Galaxy S1","Arslan",13278291,15000,"Karachi","assets/img/m1.PNG","MobTabs","Samsung","8 months warrenty","With Box, ear-phones, charger, 8GB-memory card","Price Negotiable. In new Condition!"),
      new MobTab(localStorage.getItem("current_email"),"Noir i2","Sajid",13278291,7000,"Lahore","assets/img/m2.PNG","MobTabs","Q-Mobile","3 months warrenty","With Box, ear-phones and charger","In excellent Condition! Only serious buyers contact please."),
      new MobTab(localStorage.getItem("current_email"),"Samsung Tablet","Amjad",13278291,17000,"Faisalabad","assets/img/m3.PNG","MobTabs","Samsung","No warrenty","With Box and charger","Urgent for Sale."),
      new MobTab(localStorage.getItem("current_email"),"Sony Noir-i5 ","Raheel",13278291,12000,"Abbotabad","assets/img/m4.PNG","MobTabs","Sony Ericcson","12 months warrenty","With complete accessories!","Only 3 months used! In brand new Condition!"),
      ];
   
    happ_ad_arr: HomeAppliance[]=[
    new HomeAppliance(localStorage.getItem("current_email"),"Microwave Oven","Arslan",13278291,1500,"Karachi","assets/img/a1.PNG","HomeApp","Microwave","In Excellent working conditions!"),
    new HomeAppliance(localStorage.getItem("current_email"),"5-in-1 Cooking and Baking Oven","Sajid",13278291,3000,"Lahore","assets/img/a2.PNG","HomeApp","Oven","Brand New Oven, only used for 2 years. Price Negotiable."),
    new HomeAppliance(localStorage.getItem("current_email"),"Set of Two Washing Machines","Amjad",13278291,17000,"Faisalabad","assets/img/a3.PNG","HomeApp","Washing Machine","Available for whole-Sale."),
    new HomeAppliance(localStorage.getItem("current_email"),"King Size Bed","Raheel",13278291,12000,"Abbotabad","assets/img/a4.PNG","HomeApp","Furniture","Excellent conditions!"),
    ];

    constructor(public af: AngularFire){
        this.item_v = af.database.list('/Vehicles', { preserveSnapshot: true });
        this.item_mt = af.database.list('/MT', { preserveSnapshot: true }); ////(y)
        this.item_ha = af.database.list('/HomeApp', { preserveSnapshot: true }); ////(y)
    }

    submitAd(form, cat){

        if(cat === 'Vehicle'){
            this.item_v.push(new Vehicle("UserName",form['title'],"Owner",form['contact'],form['price'],form['area'],form['img'],cat,form['brand'],form['model'],form['kms'],form['features'])
            );
            alert('New Vehicle Added!');
        }
        if(cat === 'MobTabs'){
            this.item_mt.push(new MobTab("UserName",form['title'],"Owner",form['contact'],form['price'],form['area'],form['img'],cat,form['brand'],form['warrenty'],form['accessories'],form['details'])
            );
            alert('New Item Added!');
            // this.aa.newMobTab(form['title'],form['contact'],form['price'],form['area'],form['img'],cat,form['brand'],form['warrenty'],form['accessories'],form['details']);
        }
        if(cat === 'HomeApp'){
            this.item_ha.push(new HomeAppliance("UserName",form['title'],"Owner",form['contact'],form['price'],form['area'],form['img'],cat,form['type'],form['condition']));
            alert('New Item Added!');
            // this.aa.newHomeApp(form['title'],form['contact'],form['price'],form['area'],form['img'],cat,form['type'],form['condition']);
        }
    }
}