import http from '@/http-common'

class StepMechanicalService {
    getAll(params: any): Promise<any> {
        return http.get('/etapas/mecanica', {
            params
        })
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/etapas/mecanica', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/etapas/mecanica/${id}`, data)
    }
}

export default new StepMechanicalService();