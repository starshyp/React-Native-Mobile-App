# Rocket Elevators Mobile

### What is new?

A mobile application for Rocket Elevators intended for the company's maintenance agents who need to interact with the infrastructure they support and maintain.

### How to use

```bash
For security purposes, access is granted only to the three technicians (the graders):
mathieu.houde@codeboxx.biz
patrick.thibault@codeboxx.biz
david.amyot@codeboxx.biz

Simply connect using one of the three emails above.
```

### Features
- Startup screen restricting access only to authorized personnel
- Home screen with a list of all inactive elevators fetched from an API
- Elevator status screen to update the status from inactive to active
- Notifications (popups) confirming desired actions
- Design elements that feature the Rocket Elevators brand identity
- Simple navigation options - home, go back, connect, and logout

### API Info
- https://rocketapis.azurewebsites.net/api/employee/{email} (one of the three above)
- https://rocketapis.azurewebsites.net/api/elevators
- https://rocketapis.azurewebsites.net/api/elevators/notactive
- https://rocketapis.azurewebsites.net/api/elevators/{id}
- (PUT) https://rocketapis.azurewebsites.net/api/elevators/${id}/active

### Notes
- Additional API endpoints were setup
- Link to API repo: [Rocket Elevators Foundation - REST API](https://github.com/starshyp/Rocket-Elevators-Foundation-REST-API)
- The yellow-tinted popup on iOS is default when in a development environment
- Thank you

### previews:
#### startup screen
![](https://lh3.googleusercontent.com/pw/AM-JKLUDtUYt47i9RpyayFpb6np-mnwnbd3CWiDr4lyr5K8pnBqL4s9yiZ3JsFMxpiLU5kI_jqKqHQbyj64lowh95EKjp3gpcz7I-9ZfSfJS-CV6ZTV6itME-XlkebQ89RnmYxGnZVjxiUaUnZis3uXUbj4p=w830-h888-no?authuser=0)

#### unauthorized (email verification)
![](https://lh3.googleusercontent.com/pw/AM-JKLW2IexacNSQFUj-cxYfsWzbnI54nRpYS25jXSXaw06GkoZVPmN08xTWdLiENYnzo7xOGMkkRc6sxNBc0N_1CMg7VvESro-OAngtPVpwjvqt_MVCBa7-M1aiYzfwJ4bcSHzywySp37tjRwJvD-6yk0dJ=w835-h890-no?authuser=0)

#### home screen
![](https://lh3.googleusercontent.com/pw/AM-JKLW1WiDQYnjnqVU-vnVqWp7AvjD2Gd7eNxJCJDEbeBv1kap8BIuEXHunCA0XrRhB7IHKe9-tCxciJSkgnzh4auhwKeCpp4A644-YrdrXYALNR34AcP6wbi5PFbcepwI4Tbg9AU2WltGAH7QmM2RSc47A=w832-h892-no?authuser=0)

#### elevator status
![](https://lh3.googleusercontent.com/pw/AM-JKLUYF0jVwzxs2XWNTUbPpkSn8M1Ke68Kw86j0EyzmvTEcHRYMzcwYJXyh7Zqam9zeVwskwC9E8AIljETf0NH5bWb3xNBS-PUn7CQAaMK3mXkI9D0sP4LihHXnlpnF1k5H2_BB5mo60sTrO-ZjnuBUGsV=w834-h892-no?authuser=0)

#### elevator status change confirmation (popup)
![](https://lh3.googleusercontent.com/pw/AM-JKLXmwwgTmAHjHVN23gOlbOFqyHPErS8MNzWKQY5YBvtchC98_yu5M3yY-VNFV6__l526SzwqYOmi86RDTjWf18EpL8NhSQFzUzyke-5lVfa5JTLSQow8WG6hg_Dz35CnUk0BiDAsd41RJxCVesu9hPUW=w837-h882-no?authuser=0)

#### elevator status change confirmation
![](https://lh3.googleusercontent.com/pw/AM-JKLXE714oQQ2Wwx_qBJxmKQCMQXqFH7oV47yWJ_nq5DsfwIvKrDPLeT4E8eJiH32nwCARsp2WB3llhSH30NLFlN6p8AdZKbIR102xKulmIXNC_OipdO6rLbzm5C4t1QOSlFikGO0F8COin-bdCjtVhUmr=w835-h894-no?authuser=0)

#### confirmation of change in DB
![](https://lh3.googleusercontent.com/pw/AM-JKLVyRC0V1R9x-sMOZDDSYXxMvKgf05r8mmeAXEF2DUEhLXvAy-UTVKVu9npuh9mfbQQSJV6EsEwFnIJPaNlY3aBxJ_wh-Em9bEWi4ooY3aBqF45Y_gLicE-oCaUeQ98iNnmExGxOA_lFa-QvlkxxYZW9=w443-h549-no?authuser=0)

#### removed from inactive list
![](https://lh3.googleusercontent.com/pw/AM-JKLUt6LrY5aFSLMVV_DYMchh-yKI92xigoBNlCxXgK_EC02x-weHq5mZKojAqN7ZDgUqys9AEj7n5ICDQ1i8WA0wAaO0fnpUeyJslsf458-A0AX-NrGMd5dD6qLOo3Iss7YNMSAzYZ2NyxYOwghpgdkI0=w836-h889-no?authuser=0)

----------------
