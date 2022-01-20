import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitonBusiness";
import CompetitionDatabase from "../data/CompetitonDatabase";

export default class CompetitionController {
    async create (req: Request, res: Response): Promise <void> {
        try {
            const {name, unit, wins} = req.body
            
            await new CompetitionBusiness().create(name, unit, wins)

            res.status(200).send({message: 'Competição criada.'})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }

    async createResult (req: Request, res: Response): Promise<void> {
        try {
            const {athelteId, competitionId, result, unit} = req.body
            
            await new CompetitionBusiness().createResult(athelteId, competitionId, result)

            res.status(200).send({message: 'Resultados cadastrados.'})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
    
    async finishCompetition (req: Request, res: Response): Promise <void> {
        try {
            const {competitionId} = req.body
            
            await new CompetitionBusiness().finishCompetition(competitionId)

            res.status(200).send({message: 'Competição encerrada.'})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
    
    async getRanking (req: Request, res: Response): Promise <void> {
        try {
            const competitionId = req.params.id

            const ranking = await new CompetitionBusiness().getRanking(competitionId)
            const competition = await new CompetitionDatabase().getCompetition(competitionId)

            res.status(200).send({status: competition?.getStatus(), ranking: ranking})
        } catch (error: any) {
            res.status(500).send(error.message || error.sqlmessage)
        }
    }
}