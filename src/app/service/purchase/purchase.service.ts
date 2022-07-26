import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from 'src/app/models/purchase/purchase';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  url: string = 'https://localhost:44397/api/purchase';
  constructor(private http: HttpClient) {}

  // get all purchases
  getPurchases(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(`${this.url}/getallpurchases`);
  }

  // get purchase by id
  getPurchaseById(id: number): Observable<Purchase> {
    return this.http.get<Purchase>(`${this.url}/GetPurchase/${id}`);
  }
  // create purchase
  createPurchase(purchase: Purchase): Observable<Purchase> {
    return this.http.post<Purchase>(`${this.url}/register`, purchase);
  }
  // update purchase
  updatePurchase(
    purchase_id: number,
    purchase: Purchase
  ): Observable<Purchase> {
    return this.http.put<Purchase>(
      `${this.url}/update/${purchase_id}`,
      purchase
    );
  }
}
