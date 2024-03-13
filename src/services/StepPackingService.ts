import http from '@/http-common'

class StepPackingService {
    getAll(params: any): Promise<any> {
        return http.get('/etapas/embalagem', {
            params
        })
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/etapas/embalagem', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/etapas/embalagem/${id}`, data)
    }
}

export default new StepPackingService();