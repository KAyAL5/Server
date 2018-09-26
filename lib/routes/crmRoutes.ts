import { Request, Response } from "express";

import { ContactController } from "../controllers/crmController";

export class Routes {

    public contactController: ContactController = new ContactController();

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })


        // Get all contacts
        app.route('/contact')
            .get(this.contactController.getContacts);


        // get a specific contact
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID);

        /** Remember that we don’t have to call app.route(‘/contact/:contactId’) 
        * every single time for GET, PUT or DELETE a single contact. You can combine them
        */
        // update a specific contact
        // app.route('/contact/:contactId')
        //     .put(this.contactController.updateContact)

        app.route('/contact/:contactId')
            // edit specific contact
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)

        // Create a new contact
        app.route('/contact')
            .post(this.contactController.addNewContact);

        // delete a specific contact
        app.route('/contact/:contactId')
            .delete(this.contactController.deleteContact)


        //------------------------------------------------------
        // Contact 
        app.route('/contact')
            // GET endpoint 
            .get((req: Request, res: Response) => {
                // Get all contacts            
                res.status(200).send({
                    message: 'GET contact request successfulll!!!!'
                })
            })

        // // POST endpoint
        // .post((req: Request, res: Response) => {   
        // // Create new contact         
        //     res.status(200).send({
        //         message: 'POST contract request successfulll!!!!'
        //     })
        // })

        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get((req: Request, res: Response) => {
                // Get a single contact detail            
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
            .put((req: Request, res: Response) => {
                // Update a contact           
                res.status(200).send({
                    message: 'PUT request successfulll!!!!'
                })
            })
            .delete((req: Request, res: Response) => {
                // Delete a contact     
                res.status(200).send({
                    message: 'DELETE request successfulll!!!!'
                })
            })
    }
}