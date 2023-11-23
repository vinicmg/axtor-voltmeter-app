import http from '@/http-common';

class SectorService {
    getAll(params): Promise<any> {  
        return http.get('/setor', {
            params
        });
    }
    create(data: any): Promise<any> {
        return http.post('/cadastro/setor', data)
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/setor/editar/${id}`, data)
    }
    delete(id: any): Promise<any> {
        return http.delete(`/setor/${id}`)
    }
}

export default new SectorService();