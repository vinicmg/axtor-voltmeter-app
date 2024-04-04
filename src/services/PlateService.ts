import http from '@/http-common';

class PlateService {
    getAll(params: any): Promise<any> {
        return http.get('/equipamentos', {
            params
        })
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/equipamentos', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/equipamentos/editar/${id}`, data)
    }
    delete(id: any): Promise<any> {
        return http.delete(`/equipamentos/${id}`)
    }
}

export default new PlateService();