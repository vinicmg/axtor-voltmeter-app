import http from '@/http-common';

class ConfigService {
    getAll(params: any): Promise<any> {
        return http.get('/configuracao', {
            params
        });
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/configuracao', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/configuracao/editar/${id}`, data)
    }
    delete(id: any): Promise<any> {
        return http.delete(`/configuracao/${id}`)
    }
}

export default new ConfigService();