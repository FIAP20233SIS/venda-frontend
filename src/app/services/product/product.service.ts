import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any[]> {
    const apiUrl = 'https://apiproduto.azurewebsites.net/produto/exibir';
    return this.http.get<any[]>(apiUrl)
    .pipe(
      tap(data => console.log('Produtos recebidos:', data)),
      catchError(error => {
        console.error('Erro ao buscar produtos:', error);
        return [];
      })
    );
  }
}