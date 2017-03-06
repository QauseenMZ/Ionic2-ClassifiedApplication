import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods, AngularFire, FirebaseListObservable } from 'angularfire2';

class UserModel{
    constructor(private userId: string, private userName: string, private email: string, private password: string){
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}

@Injectable()
export class User{

    loginBool = false;
    currentUser ='';
    currentEmail = '';
    currentUID='';
    allUsers: FirebaseListObservable<any>;
    
    constructor(private af: AngularFire ){
        this.allUsers = this.af.database.list('/Users', {preserveSnapshot: true});
    }

    login(e,p){
        this.af.auth.login({ email: e.toString(), password: p }).then((data)=>
        { 
            console.log("Logged In!", data, "UID: ", data.uid);
            this.allUsers.subscribe((users) => {
                // console.log(users.val());
                users.forEach((user)=>{
                    console.log('In', user.val().userName);
                    if(user.val().userId === data.uid){
                        this.currentUser = user.val().userName.toString();
                        console.log("Curent",this.currentUser);
                    };
                }
                );
            });
            this.loginBool = true;
            console.log("lgged in");
        }
    );
    }

    register(u,e,p){
        console.log(e,p);
        this.af.auth.createUser({ email: e.toString(), password: p }).then((data)=>
        {
            this.allUsers.push(new UserModel(data.uid,u,e,p)).then(
                (data)=> {console.log("After Push", data);}
            );
            console.log("User Created!");
        });
    }
}