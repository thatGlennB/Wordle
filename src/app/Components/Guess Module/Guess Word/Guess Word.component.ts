import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { GuessLetterComponent } from '../Guess Tile/Guess Tile.component';
import { GuessMatrixComponent } from '../Guess Matrix/Guess Matrix.component';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Observable, ObservableInput, Subscription, filter, map, mergeMap, pairwise, tap } from 'rxjs';
import { WordStatus } from '../../../Enums/Word Status'
import { GuessService } from '../../../Services/Guess.service';


@Component({
    selector: 'app-guess-word',
    standalone: true,
    imports: [
        CommonModule,
        GuessLetterComponent,
        GuessMatrixComponent
    ],
    templateUrl: './Guess Word.component.html',
    styleUrl: './Guess Word.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // animations:[
    //     trigger('onInvalidWord',[
    //         state('invalid',style({})),
    //         transition('* => invalid',[
    //             animate('200ms', keyframes([
    //                 style({
    //                     transform: 'translateX(10px)',
    //                     offset: 0.1
    //                 }),
    //                 style({
    //                     transform: 'translateX(-10px)',
    //                     offset: 0.2
    //                 }),
    //                 style({
    //                     transform: 'translateX(10px)',
    //                     offset: 0.3
    //                 }),
    //                 style({
    //                     transform: 'translateX(-10px)',
    //                     offset: 0.4
    //                 }),
    //                 style({
    //                     transform: 'translateX(10px)',
    //                     offset: 0.5
    //                 }),
    //                 style({
    //                     transform: 'translateX(-10px)',
    //                     offset: 0.6
    //                 }),
    //                 style({
    //                     transform: 'translateX(10px)',
    //                     offset: 0.7
    //                 }),
    //                 style({
    //                     transform: 'translateX(-10px)',
    //                     offset: 0.8
    //                 }),
    //                 style({
    //                     transform: 'translateX(10px)',
    //                     offset: 0.9
    //                 }),
    //                 style({
    //                     transform: 'translateX(-10px)',
    //                     offset: 1
    //                 })
    //             ]))
    //         ])
    //     ])
    // ]
})
export class GuessWordComponent{
    @Input() wordIndex!:number;

    
 }