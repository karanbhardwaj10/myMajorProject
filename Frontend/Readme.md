Contains frontend code


jabh new address add kardenge ham through a service , it should append to that upper address2 box , lets say ki hamne ek useEffect banaya that triggers 


jaise hi new address add kiya , it should populate in the above component , so it will fetch

as user login in , the user will have information about all the address that he has stored , and when the address page is popped up , we will do a get reuqest to get all of the address's linked to user object , whatever address that we're storing in the db it will have the reference to loged in user , how ? check that ! how will the address will have user reference , how can we map address to a particular user object in the db 

now in the get address request we will first get the objectID of address stored in user object in db , we will get the address object from those ID , create a list and populate only when the user is at address page 